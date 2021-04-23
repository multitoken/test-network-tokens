const Cardano = artifacts.require("Cardano");

module.exports = function(deployer) {
  deployer.deploy(Cardano).then(() => console.log("MDATA Cardano " + " ADA " + Cardano.address + " 362f0140-ecdd-4205-b8a0-36f0fd5d8167"));
};
