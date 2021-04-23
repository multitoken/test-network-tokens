const AlphaFinance = artifacts.require("AlphaFinance");

module.exports = function(deployer) {
  deployer.deploy(AlphaFinance).then(() => console.log("MDATA AlphaFinance " + " ALPHA " + AlphaFinance.address + " 5d1dbde9-b1c5-4fd8-8e93-43fcdb375569"));
};
