const Bancor = artifacts.require("Bancor");

module.exports = function(deployer) {
  deployer.deploy(Bancor).then(() => console.log("MDATA Bancor " + " BNT " + Bancor.address + " ed46f10c-9a32-42dd-9fb1-1ac2cad2d85e"));
};
