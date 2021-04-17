const Synthetix = artifacts.require("Synthetix");

module.exports = function(deployer) {
  deployer.deploy(Synthetix);
};
