const Audius = artifacts.require("Audius");

module.exports = function(deployer) {
  deployer.deploy(Audius);
};
