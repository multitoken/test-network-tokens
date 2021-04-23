const OmgNetwork = artifacts.require("OmgNetwork");

module.exports = function(deployer) {
  deployer.deploy(OmgNetwork).then(() => console.log("MDATA OmgNetwork " + " OMG " + OmgNetwork.address + " e6a8644b-8637-46c5-9543-be3c106285bc"));
};
