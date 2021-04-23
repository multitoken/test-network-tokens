const Amp = artifacts.require("Amp");

module.exports = function(deployer) {
  deployer.deploy(Amp).then(() => console.log("MDATA Amp " + " AMP " + Amp.address + " ba42a5e9-b086-4b61-a062-eb2e924ae159"));
};
