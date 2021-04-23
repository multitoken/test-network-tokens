const Bitcoin = artifacts.require("Bitcoin");

module.exports = function(deployer) {
  deployer.deploy(Bitcoin).then(() => console.log("MDATA Bitcoin " + " BTC " + Bitcoin.address + " 1e31218a-e44e-4285-820c-8282ee222035"));
};
