const CelerNetwork = artifacts.require("CelerNetwork");

module.exports = function(deployer) {
  deployer.deploy(CelerNetwork).then(() => console.log("MDATA CelerNetwork " + " CELR " + CelerNetwork.address + " 5c0bebde-8a1d-4ff8-8e57-e5976cdb8cd8"));
};
