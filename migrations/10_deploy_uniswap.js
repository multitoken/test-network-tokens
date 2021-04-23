const Uniswap = artifacts.require("Uniswap");

module.exports = function(deployer) {
  deployer.deploy(Uniswap).then(() => console.log("MDATA Uniswap " + " UNI " + Uniswap.address + " 1d51479d-68f6-4886-8644-2a55ea9007bf"));
};
