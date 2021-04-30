const BigNumber = require('bignumber.js');
const dotenv = require('dotenv');
const ethers = require('ethers');
const fs = require('fs');
const Web3 = require('web3');
const {getContracts} = require("./utils");

dotenv.config();

const MNEMONIC = process.env.MNEMONIC;
const INFURA_DSN = process.env.INFURA_DSN;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

class Contract {
    constructor(infuraDSN,contractPath, contractAddress, mnemonic = null, privateKey = null) {
        if (!mnemonic && !privateKey) {
            throw new Error('Either mnemonic or private key should be providfed');
        }

        this.address = contractAddress;

        let provider = new Web3.providers.HttpProvider(infuraDSN);
        this.web3 = new Web3(provider)
        this.wallet = privateKey ? new ethers.Wallet(privateKey) : ethers.Wallet.fromMnemonic(mnemonic);
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

(async () => {
    for (let contractInfo of getContracts()) {
        const contract = new Contract(
            INFURA_DSN,
            `build/contracts/${contractInfo.name}.json`,
            contractInfo.address,
            MNEMONIC,
            PRIVATE_KEY
        )
        await contract.mint(500);
    }
})()
