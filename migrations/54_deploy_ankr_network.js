const AnkrNetwork = artifacts.require("AnkrNetwork");

module.exports = function(deployer) {
  deployer.deploy(AnkrNetwork).then(() => console.log("MDATA AnkrNetwork " + " ANKR " + AnkrNetwork.address + " 998058d5-f705-448a-961a-50a6b922e0f5"));
};
