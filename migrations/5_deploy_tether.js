const Tether = artifacts.require("Tether");

module.exports = function(deployer) {
  deployer.deploy(Tether).then(() => console.log("MDATA Tether " + " USDT " + Tether.address + " 51f8ea5e-f426-4f40-939a-db7e05495374"));
};
