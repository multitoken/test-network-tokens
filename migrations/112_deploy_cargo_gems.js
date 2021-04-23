const CargoGems = artifacts.require("CargoGems");

module.exports = function(deployer) {
  deployer.deploy(CargoGems).then(() => console.log("MDATA CargoGems " + " GEM " + CargoGems.address + " ba6d8ffa-7ce7-4ddc-8caa-15bae28c1c66"));
};
