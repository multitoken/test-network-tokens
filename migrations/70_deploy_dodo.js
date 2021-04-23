const Dodo = artifacts.require("Dodo");

module.exports = function(deployer) {
  deployer.deploy(Dodo).then(() => console.log("MDATA Dodo " + " DODO " + Dodo.address + " 3fcff7ed-8b77-4224-bc3c-21accd52cd5d"));
};
