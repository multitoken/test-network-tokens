const Bnb = artifacts.require("Bnb");

module.exports = function(deployer) {
  deployer.deploy(Bnb).then(() => console.log("MDATA Bnb " + " BNB " + Bnb.address + " 7dc551ba-cfed-4437-a027-386044415e3e"));
};
