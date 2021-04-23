const Ethereum = artifacts.require("Ethereum");

module.exports = function(deployer) {
  deployer.deploy(Ethereum).then(() => console.log("MDATA Ethereum " + " ETH " + Ethereum.address + " 21c795f5-1bfd-40c3-858e-e9d7e820c6d0"));
};
