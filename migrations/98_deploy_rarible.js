const Rarible = artifacts.require("Rarible");

module.exports = function(deployer) {
  deployer.deploy(Rarible).then(() => console.log("MDATA Rarible " + " RARI " + Rarible.address + " d8fa5841-fe19-447e-b0d0-54142d8e57bd"));
};
