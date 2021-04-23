const Polygon = artifacts.require("Polygon");

module.exports = function(deployer) {
  deployer.deploy(Polygon).then(() => console.log("MDATA Polygon " + " MATIC " + Polygon.address + " 4b474270-99ba-4a18-869d-11cd3fc0201a"));
};
