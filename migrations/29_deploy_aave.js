const Aave = artifacts.require("Aave");

module.exports = function(deployer) {
  deployer.deploy(Aave).then(() => console.log("MDATA Aave " + " AAVE " + Aave.address + " 0472643b-1c7a-47a2-a45e-ec1e3e1269cd"));
};
