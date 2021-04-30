const Rarible = artifacts.require("Rarible");

module.exports = function(deployer) {
  deployer.deploy(Rarible);
};
