const Terra = artifacts.require("Terra");

module.exports = function(deployer) {
  deployer.deploy(Terra).then(() => console.log("MDATA Terra " + " LUNA " + Terra.address + " 86da9b7d-922b-4abb-8599-e75c6fa5a138"));
};
