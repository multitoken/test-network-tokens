const UsdCoin = artifacts.require("UsdCoin");

module.exports = function(deployer) {
  deployer.deploy(UsdCoin).then(() => console.log("MDATA UsdCoin " + " USDC " + UsdCoin.address + " 4515ba15-2719-4183-b0ca-b9255d55b67e"));
};
