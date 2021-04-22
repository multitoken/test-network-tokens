const KeepNetwork = artifacts.require("KeepNetwork");

module.exports = function(deployer) {
  deployer.deploy(KeepNetwork);
};
