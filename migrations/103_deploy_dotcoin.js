const Dotcoin = artifacts.require("Dotcoin");

module.exports = function(deployer) {
  deployer.deploy(Dotcoin).then(() => console.log("MDATA Dotcoin " + " DOT " + Dotcoin.address + " 00b04077-1446-45fc-a2f4-357614862528"));
};
