const Loopring = artifacts.require("Loopring");

module.exports = function(deployer) {
  deployer.deploy(Loopring).then(() => console.log("MDATA Loopring " + " LRC " + Loopring.address + " ce354118-d8d8-4d7f-a401-c413a3b05a2a"));
};
