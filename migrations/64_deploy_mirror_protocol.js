const MirrorProtocol = artifacts.require("MirrorProtocol");

module.exports = function(deployer) {
  deployer.deploy(MirrorProtocol).then(() => console.log("MDATA MirrorProtocol " + " MIR " + MirrorProtocol.address + " ff92041e-7978-4fc3-83f9-dc21c044226e"));
};
