const Celo = artifacts.require("Celo");

module.exports = function(deployer) {
  deployer.deploy(Celo);
};
