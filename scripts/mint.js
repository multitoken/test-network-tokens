const BigNumber = require('bignumber.js');
const dotenv = require('dotenv');
const ethers = require('ethers');
const fs = require('fs');
const path = require('path')
const Web3 = require('web3');

dotenv.config();

const MNEMONIC = process.env.MNEMONIC;
const INFURA_DSN = process.env.INFURA_DSN;

class Contract {
    constructor(infuraDSN, mnemonic, contractPath, contractAddress) {
        this.address = contractAddress

        let provider = new Web3.providers.HttpProvider(infuraDSN);
        this.web3 = new Web3(provider)
        this.wallet = ethers.Wallet.fromMnemonic(mnemonic);
        this.web3.eth.accounts.wallet.add(this.wallet.privateKey)
        this.web3.eth.defaultAccount = this.wallet.address

        let rawData = fs.readFileSync(contractPath);
        let jsonData = JSON.parse(rawData);
        this.contract = new this.web3.eth.Contract(jsonData['abi'], contractAddress)
    }

    async mint(amount) {
        const name = await this.name();
        const symbol = await this.symbol();

        const decimals = await this.contract.methods.decimals().call();
        const scaledAmount = this._scale(amount, decimals);

        const method = this.contract.methods.mint(this.wallet.address, scaledAmount);

        const gasPrice = await this.web3.eth.getGasPrice();
        const gasEstimate = await method.estimateGas({from: this.wallet.address});
        await method.send({
            from: this.wallet.address,
            gasPrice: gasPrice,
            gas: gasEstimate,
        })

        console.log(`${name} minted: ${amount} ${symbol} to ${this.wallet.address}`)
    }

    async name() {
        return await this.contract.methods.name().call()
    }

    async symbol() {
        return await this.contract.methods.symbol().call()
    }

    _scale(input, decimalPlaces) {
        const scalePow = new BigNumber(decimalPlaces.toString());
        const scaleMul = new BigNumber(10).pow(scalePow);
        input = new BigNumber(input)
        return input.times(scaleMul);
    }
}

const getContracts = () => {
    const contractsPath = path.resolve(__dirname, '../build/contracts');
    const fileNames = fs.readdirSync(contractsPath);

    const addresses = []
    for (const fileName of fileNames) {
        const filePath = path.resolve(contractsPath, fileName);
        let rawData = fs.readFileSync(filePath);
        let jsonData = JSON.parse(rawData);

        if (jsonData['networks']['42']) {
            addresses.push({
                name: jsonData['contractName'],
                address: jsonData['networks']['42']['address'],
            });
        }
    }

    return addresses;
}

(async () => {
    for (let contractInfo of getContracts()) {
        const contract = new Contract(
            INFURA_DSN,
            MNEMONIC,
            `build/contracts/${contractInfo.name}.json`,
            contractInfo.address
        )
        await contract.mint(500);
    }
})()
