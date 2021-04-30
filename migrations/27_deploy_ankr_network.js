const AnkrNetwork = artifacts.require("AnkrNetwork");

module.exports = function(deployer) {
  deployer.deploy(AnkrNetwork);
};
