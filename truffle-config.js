const dotenv = require('dotenv');
const HDWalletProvider = require('truffle-hdwallet-provider');

dotenv.config();

const MNEMONIC = process.env.MNEMONIC;
const INFURA_DSN = process.env.INFURA_DSN;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
        },
        kovan: {
            provider: () => new HDWalletProvider(MNEMONIC, INFURA_DSN),
            network_id: 42,
            gas: 4000000,
        },
        matic: {
            provider: () => new HDWalletProvider(
                ['24e07950ac478fe14c56172256e5bcda0fda5797da1a99ae2ec5392fd1a1a918'],
                'https://rpc-mumbai.matic.today'),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
    },
    compilers: {
        solc: {
            version: '0.8.3',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    },
    plugins: [
        'truffle-plugin-verify',
    ],
    api_keys: {
        etherscan: ETHERSCAN_API_KEY,
    },
};
