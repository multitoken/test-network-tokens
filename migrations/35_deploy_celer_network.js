const CelerNetwork = artifacts.require("CelerNetwork");

module.exports = function(deployer) {
  deployer.deploy(CelerNetwork);
};
