const ZKSwap = artifacts.require("ZKSwap");

module.exports = function(deployer) {
  deployer.deploy(ZKSwap);
};
