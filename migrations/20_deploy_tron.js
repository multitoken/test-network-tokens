const Tron = artifacts.require("Tron");

module.exports = function(deployer) {
  deployer.deploy(Tron).then(() => console.log("MDATA Tron " + " TRX " + Tron.address + " 1c077d6e-99c7-491c-b24d-1d359011cd81"));
};
