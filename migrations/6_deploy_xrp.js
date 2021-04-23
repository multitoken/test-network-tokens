const Xrp = artifacts.require("Xrp");

module.exports = function(deployer) {
  deployer.deploy(Xrp).then(() => console.log("MDATA Xrp " + " XRP " + Xrp.address + " 97775be0-2608-4720-b7af-f85b24c7eb2d"));
};
