const Dmarket = artifacts.require("Dmarket");

module.exports = function(deployer) {
  deployer.deploy(Dmarket).then(() => console.log("MDATA Dmarket " + " DMT " + Dmarket.address + " 0c7afd5c-7131-4140-99fc-19437c965ec4"));
};
