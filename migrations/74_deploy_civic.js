const Civic = artifacts.require("Civic");

module.exports = function(deployer) {
  deployer.deploy(Civic).then(() => console.log("MDATA Civic " + " CVC " + Civic.address + " 90b4f888-aa6d-4e30-9ee5-81141e6802d9"));
};
