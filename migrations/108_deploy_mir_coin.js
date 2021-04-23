const MirCoin = artifacts.require("MirCoin");

module.exports = function(deployer) {
  deployer.deploy(MirCoin).then(() => console.log("MDATA MirCoin " + " MIR " + MirCoin.address + " 50dfc5f2-319c-4090-a4fd-5e209b2e1347"));
};
