const Stellar = artifacts.require("Stellar");

module.exports = function(deployer) {
  deployer.deploy(Stellar).then(() => console.log("MDATA Stellar " + " XLM " + Stellar.address + " 7c435a77-5be9-4424-b5d1-1c02b968c56f"));
};
