const OmgNetwork = artifacts.require("OmgNetwork");

module.exports = function(deployer) {
  deployer.deploy(OmgNetwork);
};
