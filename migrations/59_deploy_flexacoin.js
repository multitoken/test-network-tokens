const Flexacoin = artifacts.require("Flexacoin");

module.exports = function(deployer) {
  deployer.deploy(Flexacoin).then(() => console.log("MDATA Flexacoin " + " FXC " + Flexacoin.address + " 263a4d53-90be-4788-8a23-71aff08a6e5f"));
};
