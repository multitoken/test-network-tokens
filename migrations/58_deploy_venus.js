const Venus = artifacts.require("Venus");

module.exports = function(deployer) {
  deployer.deploy(Venus).then(() => console.log("MDATA Venus " + " XVS " + Venus.address + " df6d9f65-389a-4a15-8d02-6bf363b37211"));
};
