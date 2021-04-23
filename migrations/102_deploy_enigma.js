const Enigma = artifacts.require("Enigma");

module.exports = function(deployer) {
  deployer.deploy(Enigma).then(() => console.log("MDATA Enigma " + " ENG " + Enigma.address + " a6b844e1-2c13-49fc-8f5c-37102c0ebec6"));
};
