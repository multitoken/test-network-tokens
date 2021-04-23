const Ogncoin = artifacts.require("Ogncoin");

module.exports = function(deployer) {
  deployer.deploy(Ogncoin).then(() => console.log("MDATA Ogncoin " + " OGN " + Ogncoin.address + " 49258495-39f0-4db9-b2c2-1c974336dd91"));
};
