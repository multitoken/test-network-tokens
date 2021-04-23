const KyberNetwork = artifacts.require("KyberNetwork");

module.exports = function(deployer) {
  deployer.deploy(KyberNetwork).then(() => console.log("MDATA KyberNetwork " + " KNC " + KyberNetwork.address + " 9dfaa283-d0f5-4a10-b5c4-52e481850087"));
};
