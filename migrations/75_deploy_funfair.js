const Funfair = artifacts.require("Funfair");

module.exports = function(deployer) {
  deployer.deploy(Funfair).then(() => console.log("MDATA Funfair " + " FUN " + Funfair.address + " 44bbc825-32bb-4c3f-879d-795f4d4aaf9e"));
};
