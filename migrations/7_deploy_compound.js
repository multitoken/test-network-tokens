const Compound = artifacts.require("Compound");

module.exports = function(deployer) {
  deployer.deploy(Compound);
};
