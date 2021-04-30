const Dhedge = artifacts.require("Dhedge");

module.exports = function(deployer) {
  deployer.deploy(Dhedge);
};
