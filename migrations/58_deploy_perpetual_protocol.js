const PerpetualProtocol = artifacts.require("PerpetualProtocol");

module.exports = function(deployer) {
  deployer.deploy(PerpetualProtocol);
};
