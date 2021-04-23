const Hyperspace = artifacts.require("Hyperspace");

module.exports = function(deployer) {
  deployer.deploy(Hyperspace).then(() => console.log("MDATA Hyperspace " + " AMP " + Hyperspace.address + " 3881406b-c4b1-4699-a242-aab303f946ff"));
};
