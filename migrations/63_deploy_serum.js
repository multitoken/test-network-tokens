const Serum = artifacts.require("Serum");

module.exports = function(deployer) {
  deployer.deploy(Serum);
};
