const Thorchain = artifacts.require("Thorchain");

module.exports = function(deployer) {
  deployer.deploy(Thorchain).then(() => console.log("MDATA Thorchain " + " RUNE " + Thorchain.address + " c3ef2d57-b7e2-4b13-b9a5-bf873fea8113"));
};
