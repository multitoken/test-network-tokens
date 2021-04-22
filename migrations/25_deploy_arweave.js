const Arweave = artifacts.require("Arweave");

module.exports = function(deployer) {
  deployer.deploy(Arweave);
};
