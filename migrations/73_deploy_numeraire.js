const Numeraire = artifacts.require("Numeraire");

module.exports = function(deployer) {
  deployer.deploy(Numeraire).then(() => console.log("MDATA Numeraire " + " NMR " + Numeraire.address + " bc49d919-2925-472d-8bef-e189c0059ccc"));
};
