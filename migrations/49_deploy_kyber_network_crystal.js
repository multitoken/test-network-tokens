const KyberNetworkCrystal = artifacts.require("KyberNetworkCrystal");

module.exports = function(deployer) {
  deployer.deploy(KyberNetworkCrystal);
};
