const OriginProtocol = artifacts.require("OriginProtocol");

module.exports = function(deployer) {
  deployer.deploy(OriginProtocol);
};
