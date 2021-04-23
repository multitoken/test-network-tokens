const Api3 = artifacts.require("Api3");

module.exports = function(deployer) {
  deployer.deploy(Api3).then(() => console.log("MDATA Api3 " + " API3 " + Api3.address + " 643e5272-a4d8-4f6e-874c-af9783ceb30a"));
};
