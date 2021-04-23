const Augur = artifacts.require("Augur");

module.exports = function(deployer) {
  deployer.deploy(Augur).then(() => console.log("MDATA Augur " + " REP " + Augur.address + " 4dfbb4ba-660d-46a1-8ff7-de3ad75cf87f"));
};
