const Vechain = artifacts.require("Vechain");

module.exports = function(deployer) {
  deployer.deploy(Vechain).then(() => console.log("MDATA Vechain " + " VET " + Vechain.address + " ce222383-2753-44d4-b9ef-2dd67a7ea730"));
};
