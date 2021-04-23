const BitcoinCash = artifacts.require("BitcoinCash");

module.exports = function(deployer) {
  deployer.deploy(BitcoinCash).then(() => console.log("MDATA BitcoinCash " + " BCH " + BitcoinCash.address + " c8c7e9a1-844d-4cfd-9dbc-ce85a8a9613f"));
};
