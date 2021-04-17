const YearnFinance = artifacts.require("YearnFinance");

module.exports = function(deployer) {
  deployer.deploy(YearnFinance);
};
