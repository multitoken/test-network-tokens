const Dhedge = artifacts.require("Dhedge");

module.exports = function(deployer) {
  deployer.deploy(Dhedge).then(() => console.log("MDATA Dhedge " + " DHT " + Dhedge.address + " 7ead16ab-1936-4ba0-a7b5-cd00be419a7e"));
};
