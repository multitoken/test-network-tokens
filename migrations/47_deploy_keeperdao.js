const Keeperdao = artifacts.require("Keeperdao");

module.exports = function(deployer) {
  deployer.deploy(Keeperdao);
};
