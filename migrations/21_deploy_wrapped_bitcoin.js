const WrappedBitcoin = artifacts.require("WrappedBitcoin");

module.exports = function(deployer) {
  deployer.deploy(WrappedBitcoin).then(() => console.log("MDATA WrappedBitcoin " + " WBTC " + WrappedBitcoin.address + " 81bbf507-29d5-4458-8d42-b81d7c197996"));
};
