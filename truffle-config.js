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
