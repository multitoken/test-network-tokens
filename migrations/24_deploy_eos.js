const Eos = artifacts.require("Eos");

module.exports = function(deployer) {
  deployer.deploy(Eos).then(() => console.log("MDATA Eos " + " EOS " + Eos.address + " 2e9a4c5d-7966-47c4-aebd-cdbc1ecf9d2e"));
};
