const CargoGems = artifacts.require("CargoGems");

module.exports = function(deployer) {
  deployer.deploy(CargoGems);
};
