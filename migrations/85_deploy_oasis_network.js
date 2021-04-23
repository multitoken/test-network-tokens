const OasisNetwork = artifacts.require("OasisNetwork");

module.exports = function(deployer) {
  deployer.deploy(OasisNetwork).then(() => console.log("MDATA OasisNetwork " + " ROSE " + OasisNetwork.address + " 1035539d-7362-42e3-b41c-422d178af8c7"));
};
