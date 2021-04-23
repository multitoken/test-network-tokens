const FeiProtocol = artifacts.require("FeiProtocol");

module.exports = function(deployer) {
  deployer.deploy(FeiProtocol).then(() => console.log("MDATA FeiProtocol " + " FEI " + FeiProtocol.address + " b7668d54-6957-4d25-be17-0fafbbf533a2"));
};
