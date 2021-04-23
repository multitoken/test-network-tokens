const Arweave = artifacts.require("Arweave");

module.exports = function(deployer) {
  deployer.deploy(Arweave).then(() => console.log("MDATA Arweave " + " AR " + Arweave.address + " 06670a42-2bc8-448b-8fbe-759c940cb43f"));
};
