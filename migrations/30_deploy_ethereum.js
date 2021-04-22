const Ethereum = artifacts.require("Ethereum");

module.exports = function(deployer) {
  deployer.deploy(Ethereum);
};
