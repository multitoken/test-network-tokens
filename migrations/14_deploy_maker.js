const Maker = artifacts.require("Maker");

module.exports = function(deployer) {
  deployer.deploy(Maker);
};
