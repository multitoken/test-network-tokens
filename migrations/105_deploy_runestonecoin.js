const Runestonecoin = artifacts.require("Runestonecoin");

module.exports = function(deployer) {
  deployer.deploy(Runestonecoin).then(() => console.log("MDATA Runestonecoin " + " RUNE " + Runestonecoin.address + " 3029f2f2-0295-4dd9-8ffc-40b9b490caf9"));
};
