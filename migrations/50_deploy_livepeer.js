const Livepeer = artifacts.require("Livepeer");

module.exports = function(deployer) {
  deployer.deploy(Livepeer);
};
