const Meta = artifacts.require("Meta");

module.exports = function(deployer) {
  deployer.deploy(Meta).then(() => console.log("MDATA Meta " + " MTA " + Meta.address + " dce1ffbd-f107-4ce6-bda4-1d1268be8f0c"));
};
