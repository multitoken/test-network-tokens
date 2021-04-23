const Kin = artifacts.require("Kin");

module.exports = function(deployer) {
  deployer.deploy(Kin).then(() => console.log("MDATA Kin " + " KIN " + Kin.address + " f7fbf2e0-5dcd-4e1e-9320-95d2e36c20b0"));
};
