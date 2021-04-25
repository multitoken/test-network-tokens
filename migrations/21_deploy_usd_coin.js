const USDCoin = artifacts.require("USDCoin");

module.exports = function(deployer) {
  deployer.deploy(USDCoin);
};
