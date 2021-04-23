const Litecoin = artifacts.require("Litecoin");

module.exports = function(deployer) {
  deployer.deploy(Litecoin).then(() => console.log("MDATA Litecoin " + " LTC " + Litecoin.address + " c7c3697d-1b9c-42bf-9664-a366634ce2b3"));
};
