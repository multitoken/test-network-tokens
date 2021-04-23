const PerpetualProtocol = artifacts.require("PerpetualProtocol");

module.exports = function(deployer) {
  deployer.deploy(PerpetualProtocol).then(() => console.log("MDATA PerpetualProtocol " + " PERP " + PerpetualProtocol.address + " 1d98737e-917a-47e0-9bea-322ff32660a8"));
};
