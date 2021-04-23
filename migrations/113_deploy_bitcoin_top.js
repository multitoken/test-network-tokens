const BitcoinTop = artifacts.require("BitcoinTop");

module.exports = function(deployer) {
  deployer.deploy(BitcoinTop).then(() => console.log("MDATA BitcoinTop " + " BTT " + BitcoinTop.address + " e20506fb-c46b-4f7c-b02a-5c5bced36925"));
};
