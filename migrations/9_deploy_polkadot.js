const Polkadot = artifacts.require("Polkadot");

module.exports = function(deployer) {
  deployer.deploy(Polkadot).then(() => console.log("MDATA Polkadot " + " DOT " + Polkadot.address + " da6a0575-ec95-4c47-855d-5fc6a3e22ada"));
};
