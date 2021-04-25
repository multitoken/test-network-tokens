const FeiProtocol = artifacts.require("FeiProtocol");

module.exports = function(deployer) {
  deployer.deploy(FeiProtocol);
};
