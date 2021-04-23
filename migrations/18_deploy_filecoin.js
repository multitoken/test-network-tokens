const Filecoin = artifacts.require("Filecoin");

module.exports = function(deployer) {
  deployer.deploy(Filecoin).then(() => console.log("MDATA Filecoin " + " FIL " + Filecoin.address + " 75526795-8e92-4513-907a-81cc1c77a278"));
};
