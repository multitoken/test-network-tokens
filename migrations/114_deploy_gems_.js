const Gems = artifacts.require("Gems");

module.exports = function(deployer) {
  deployer.deploy(Gems).then(() => console.log("MDATA Gems " + " GEM " + Gems.address + " f1785cfe-319b-4213-9cad-d8a68d158bf0"));
};
