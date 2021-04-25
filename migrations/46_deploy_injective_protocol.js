const InjectiveProtocol = artifacts.require("InjectiveProtocol");

module.exports = function(deployer) {
  deployer.deploy(InjectiveProtocol);
};
