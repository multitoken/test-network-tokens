const Flow = artifacts.require("Flow");

module.exports = function(deployer) {
  deployer.deploy(Flow).then(() => console.log("MDATA Flow " + " FLOW " + Flow.address + " cd9795cb-0469-4e53-a26b-f508772cb898"));
};
