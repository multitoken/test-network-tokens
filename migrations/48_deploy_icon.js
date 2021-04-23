const Icon = artifacts.require("Icon");

module.exports = function(deployer) {
  deployer.deploy(Icon).then(() => console.log("MDATA Icon " + " ICX " + Icon.address + " 33f132f1-62d1-495d-bee7-6c836ee21293"));
};
