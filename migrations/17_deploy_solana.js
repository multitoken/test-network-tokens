const Solana = artifacts.require("Solana");

module.exports = function(deployer) {
  deployer.deploy(Solana).then(() => console.log("MDATA Solana " + " SOL " + Solana.address + " b3d5d66c-26a2-404c-9325-91dc714a722b"));
};
