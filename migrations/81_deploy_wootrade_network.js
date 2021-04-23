const WootradeNetwork = artifacts.require("WootradeNetwork");

module.exports = function(deployer) {
  deployer.deploy(WootradeNetwork).then(() => console.log("MDATA WootradeNetwork " + " WOO " + WootradeNetwork.address + " bf654020-68ba-460c-ba72-c1a7bce8ee0c"));
};
