const Zks = artifacts.require("Zks");

module.exports = function(deployer) {
  deployer.deploy(Zks).then(() => console.log("MDATA Zks " + " ZKS " + Zks.address + " 31e9fd97-a9b8-4724-b79d-20cdc999c50b"));
};
