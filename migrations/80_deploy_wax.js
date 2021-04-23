const Wax = artifacts.require("Wax");

module.exports = function(deployer) {
  deployer.deploy(Wax).then(() => console.log("MDATA Wax " + " WAXP " + Wax.address + " 7a532850-9ec9-4780-94ad-d2759dc1c5cf"));
};
