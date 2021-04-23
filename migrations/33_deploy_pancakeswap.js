const Pancakeswap = artifacts.require("Pancakeswap");

module.exports = function(deployer) {
  deployer.deploy(Pancakeswap).then(() => console.log("MDATA Pancakeswap " + " CAKE " + Pancakeswap.address + " 147192a4-adcc-4211-be3a-f346241e83b4"));
};
