const Rally = artifacts.require("Rally");

module.exports = function(deployer) {
  deployer.deploy(Rally).then(() => console.log("MDATA Rally " + " RLY " + Rally.address + " 782a5e64-7b43-4544-a96a-e534f4374028"));
};
