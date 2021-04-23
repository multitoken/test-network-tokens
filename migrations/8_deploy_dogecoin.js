const Dogecoin = artifacts.require("Dogecoin");

module.exports = function(deployer) {
  deployer.deploy(Dogecoin).then(() => console.log("MDATA Dogecoin " + " DOGE " + Dogecoin.address + " 7d793fa7-5fc6-432a-b26b-d1b10769d42e"));
};
