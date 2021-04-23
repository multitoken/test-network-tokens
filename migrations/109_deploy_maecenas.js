const Maecenas = artifacts.require("Maecenas");

module.exports = function(deployer) {
  deployer.deploy(Maecenas).then(() => console.log("MDATA Maecenas " + " ART " + Maecenas.address + " 6f0f4b22-3175-4506-a923-732d20232dde"));
};
