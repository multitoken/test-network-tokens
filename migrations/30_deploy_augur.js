const Augur = artifacts.require("Augur");

module.exports = function(deployer) {
  deployer.deploy(Augur);
};
