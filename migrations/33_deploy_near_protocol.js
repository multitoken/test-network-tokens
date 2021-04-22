const NearProtocol = artifacts.require("NearProtocol");

module.exports = function(deployer) {
  deployer.deploy(NearProtocol);
};
