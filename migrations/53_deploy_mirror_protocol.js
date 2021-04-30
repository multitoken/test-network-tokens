const MirrorProtocol = artifacts.require("MirrorProtocol");

module.exports = function(deployer) {
  deployer.deploy(MirrorProtocol);
};
