const WrappedEthereum = artifacts.require("WrappedEthereum");

module.exports = function(deployer) {
  deployer.deploy(WrappedEthereum);
};
