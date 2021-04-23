const Synthetix = artifacts.require("Synthetix");

module.exports = function(deployer) {
  deployer.deploy(Synthetix).then(() => console.log("MDATA Synthetix " + " SNX " + Synthetix.address + " 54d246b7-f554-4386-97da-907a03c1a812"));
};
