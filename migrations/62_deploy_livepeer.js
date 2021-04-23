const Livepeer = artifacts.require("Livepeer");

module.exports = function(deployer) {
  deployer.deploy(Livepeer).then(() => console.log("MDATA Livepeer " + " LPT " + Livepeer.address + " 80e0afa8-d453-48c9-b6aa-e3a00e3feff1"));
};
