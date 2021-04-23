const Vsync = artifacts.require("Vsync");

module.exports = function(deployer) {
  deployer.deploy(Vsync).then(() => console.log("MDATA Vsync " + " XVS " + Vsync.address + " b7bc3941-69ab-46f5-a14d-7a40704dca38"));
};
