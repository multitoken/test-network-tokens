const Iota = artifacts.require("Iota");

module.exports = function(deployer) {
  deployer.deploy(Iota).then(() => console.log("MDATA Iota " + " MIOTA " + Iota.address + " f487b3d1-b79a-4c34-a7f1-09e2a92171f1"));
};
