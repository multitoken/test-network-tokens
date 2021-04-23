const PowertradeFuel = artifacts.require("PowertradeFuel");

module.exports = function(deployer) {
  deployer.deploy(PowertradeFuel).then(() => console.log("MDATA PowertradeFuel " + " PTF " + PowertradeFuel.address + " e5b72a50-6535-42dd-aa49-c4f8fc25c5fe"));
};
