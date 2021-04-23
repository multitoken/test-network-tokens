const Compound = artifacts.require("Compound");

module.exports = function(deployer) {
  deployer.deploy(Compound).then(() => console.log("MDATA Compound " + " COMP " + Compound.address + " 157f4fe3-6046-4b6d-bceb-a2af8ca021b5"));
};
