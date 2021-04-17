const BinanceUSD = artifacts.require("BinanceUSD");

module.exports = function (deployer) {
    deployer.deploy(BinanceUSD);
};
