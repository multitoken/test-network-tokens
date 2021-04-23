const WorldBitcoin = artifacts.require("WorldBitcoin");

module.exports = function(deployer) {
  deployer.deploy(WorldBitcoin).then(() => console.log("MDATA WorldBitcoin " + " WBTC " + WorldBitcoin.address + " 24c6d48e-1573-4d93-8575-92fc501b1820"));
};
