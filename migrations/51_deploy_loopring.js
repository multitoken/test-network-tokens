const Loopring = artifacts.require("Loopring");

module.exports = function(deployer) {
  deployer.deploy(Loopring);
};
