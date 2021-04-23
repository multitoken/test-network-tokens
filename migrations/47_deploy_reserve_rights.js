const ReserveRights = artifacts.require("ReserveRights");

module.exports = function(deployer) {
  deployer.deploy(ReserveRights).then(() => console.log("MDATA ReserveRights " + " RSR " + ReserveRights.address + " ca97563f-48f9-429e-a4a6-8cb7ec4365d3"));
};
