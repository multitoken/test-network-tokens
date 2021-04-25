const WootradeNetwork = artifacts.require("WootradeNetwork");

module.exports = function(deployer) {
  deployer.deploy(WootradeNetwork);
};
