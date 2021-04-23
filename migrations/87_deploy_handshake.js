const Handshake = artifacts.require("Handshake");

module.exports = function(deployer) {
  deployer.deploy(Handshake).then(() => console.log("MDATA Handshake " + " HNS " + Handshake.address + " ab552185-c1aa-4dd9-9442-f412886b7325"));
};
