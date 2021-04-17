const WrappedBitcoin = artifacts.require("WrappedBitcoin");

module.exports = function(deployer) {
  deployer.deploy(WrappedBitcoin);
};
