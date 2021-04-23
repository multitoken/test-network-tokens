const Defichain = artifacts.require("Defichain");

module.exports = function(deployer) {
  deployer.deploy(Defichain).then(() => console.log("MDATA Defichain " + " DFI " + Defichain.address + " 8db9aa6b-215e-4cc1-b10f-f93a561a2d64"));
};
