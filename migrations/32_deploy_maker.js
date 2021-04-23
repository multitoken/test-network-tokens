const Maker = artifacts.require("Maker");

module.exports = function(deployer) {
  deployer.deploy(Maker).then(() => console.log("MDATA Maker " + " MKR " + Maker.address + " 4758c080-821e-4a19-bbae-4df59682d229"));
};
