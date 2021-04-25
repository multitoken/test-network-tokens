const AlphaFinance = artifacts.require("AlphaFinance");

module.exports = function(deployer) {
  deployer.deploy(AlphaFinance);
};
