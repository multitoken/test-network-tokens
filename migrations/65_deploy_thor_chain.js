const ThorChain = artifacts.require("ThorChain");

module.exports = function(deployer) {
  deployer.deploy(ThorChain);
};
