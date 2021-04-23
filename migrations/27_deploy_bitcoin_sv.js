const BitcoinSv = artifacts.require("BitcoinSv");

module.exports = function(deployer) {
  deployer.deploy(BitcoinSv).then(() => console.log("MDATA BitcoinSv " + " BSV " + BitcoinSv.address + " ecef109b-64d3-4f3d-9789-e901ef7bacfb"));
};
