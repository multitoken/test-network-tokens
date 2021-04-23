const Ren = artifacts.require("Ren");

module.exports = function(deployer) {
  deployer.deploy(Ren).then(() => console.log("MDATA Ren " + " REN " + Ren.address + " 179d0193-a61e-47d1-8aae-d1fa9fd59d77"));
};
