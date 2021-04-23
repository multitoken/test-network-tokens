const Ampleforth = artifacts.require("Ampleforth");

module.exports = function(deployer) {
  deployer.deploy(Ampleforth).then(() => console.log("MDATA Ampleforth " + " AMPL " + Ampleforth.address + " 66bcbbca-0963-4376-8cc4-db93bce79cd9"));
};
