const Bancor = artifacts.require("Bancor");

module.exports = function(deployer) {
  deployer.deploy(Bancor);
};
