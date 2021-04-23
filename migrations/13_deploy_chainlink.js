const Chainlink = artifacts.require("Chainlink");

module.exports = function(deployer) {
  deployer.deploy(Chainlink).then(() => console.log("MDATA Chainlink " + " LINK " + Chainlink.address + " a9c04b71-33e4-4fed-8126-cf1612c7e198"));
};
