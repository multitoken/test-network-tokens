const TheGraph = artifacts.require("TheGraph");

module.exports = function(deployer) {
  deployer.deploy(TheGraph).then(() => console.log("MDATA TheGraph " + " GRT " + TheGraph.address + " fcb726c7-364f-4252-8ee8-70b0bbbd8791"));
};
