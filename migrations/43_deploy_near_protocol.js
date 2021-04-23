const NearProtocol = artifacts.require("NearProtocol");

module.exports = function(deployer) {
  deployer.deploy(NearProtocol).then(() => console.log("MDATA NearProtocol " + " NEAR " + NearProtocol.address + " 5416e814-8023-4f66-aadb-a063afca2414"));
};
