const dotenv = require('dotenv');
const HDWalletProvider = require('truffle-hdwallet-provider');

dotenv.config();

const MNEMONIC = process.env.MNEMONIC;
const INFURA_DSN = "https://kovan.infura.io/v3/8dd19a9306014b30bb8e994bbf21211c"; // process.env.INFURA_DSN;
const PrivateKeyProvider = require("truffle-privatekey-provider");
const ETHERSCAN_API_KEY = "CKZNGJ791Y4E95MN19UBAHDBFVRKSYKCK9";
const PK = "24e07950ac478fe14c56172256e5bcda0fda5797da1a99ae2ec5392fd1a1a918";

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
        },
        kovan: {
            provider: () => new PrivateKeyProvider(PK, INFURA_DSN),
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
