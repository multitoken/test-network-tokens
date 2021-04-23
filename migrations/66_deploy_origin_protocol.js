const OriginProtocol = artifacts.require("OriginProtocol");

module.exports = function(deployer) {
  deployer.deploy(OriginProtocol).then(() => console.log("MDATA OriginProtocol " + " OGN " + OriginProtocol.address + " 182447d9-2240-4002-a6e4-24392e9fec6f"));
};
