const KeepNetwork = artifacts.require("KeepNetwork");

module.exports = function(deployer) {
  deployer.deploy(KeepNetwork).then(() => console.log("MDATA KeepNetwork " + " KEEP " + KeepNetwork.address + " 0783ede3-4b2c-418a-9f82-f171894c70e2"));
};
