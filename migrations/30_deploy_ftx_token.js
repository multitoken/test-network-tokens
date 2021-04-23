const FtxToken = artifacts.require("FtxToken");

module.exports = function(deployer) {
  deployer.deploy(FtxToken).then(() => console.log("MDATA FtxToken " + " FTT " + FtxToken.address + " 78831942-1c36-4238-87c0-ee5cf5a6d895"));
};
