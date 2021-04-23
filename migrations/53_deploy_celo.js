const Celo = artifacts.require("Celo");

module.exports = function(deployer) {
  deployer.deploy(Celo).then(() => console.log("MDATA Celo " + " CELO " + Celo.address + " c7685660-2363-4570-b594-2e0ae6c9f8e4"));
};
