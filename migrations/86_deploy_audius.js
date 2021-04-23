const Audius = artifacts.require("Audius");

module.exports = function(deployer) {
  deployer.deploy(Audius).then(() => console.log("MDATA Audius " + " AUDIO " + Audius.address + " 26d83f67-2d5c-45de-a017-8240f095c760"));
};
