const Tribe = artifacts.require("Tribe");

module.exports = function(deployer) {
  deployer.deploy(Tribe);
};
