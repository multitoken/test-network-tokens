const Raydium = artifacts.require("Raydium");

module.exports = function(deployer) {
  deployer.deploy(Raydium).then(() => console.log("MDATA Raydium " + " RAY " + Raydium.address + " fd41189f-48ce-417b-97a4-3da221dfa5d8"));
};
