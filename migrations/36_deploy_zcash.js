const Zcash = artifacts.require("Zcash");

module.exports = function(deployer) {
  deployer.deploy(Zcash).then(() => console.log("MDATA Zcash " + " ZEC " + Zcash.address + " 9034399e-e229-48ca-8ff3-5ea5fc599080"));
};
