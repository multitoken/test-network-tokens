const Bloom = artifacts.require("Bloom");

module.exports = function(deployer) {
  deployer.deploy(Bloom).then(() => console.log("MDATA Bloom " + " BLT " + Bloom.address + " 2d1c0e2d-3b69-483b-b96a-1f05851a66d1"));
};
