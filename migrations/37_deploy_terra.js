const Terra = artifacts.require("Terra");

module.exports = function(deployer) {
  deployer.deploy(Terra);
};
