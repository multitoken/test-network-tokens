const Gems = artifacts.require("Gems");

module.exports = function(deployer) {
  deployer.deploy(Gems).then(() => console.log("MDATA Gems " + " GEM " + Gems.address + " ba1cf05c-8a9a-42cd-b12c-ffa3f53c9b2d"));
};
