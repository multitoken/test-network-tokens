const Sushiswap = artifacts.require("Sushiswap");

module.exports = function(deployer) {
  deployer.deploy(Sushiswap);
};
