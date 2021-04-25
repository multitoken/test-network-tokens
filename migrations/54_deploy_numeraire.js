const Numeraire = artifacts.require("Numeraire");

module.exports = function(deployer) {
  deployer.deploy(Numeraire);
};
