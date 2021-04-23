const Uma = artifacts.require("Uma");

module.exports = function(deployer) {
  deployer.deploy(Uma).then(() => console.log("MDATA Uma " + " UMA " + Uma.address + " e46145b2-81b5-452f-928e-cb4ea5025228"));
};
