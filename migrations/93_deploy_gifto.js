const Gifto = artifacts.require("Gifto");

module.exports = function(deployer) {
  deployer.deploy(Gifto).then(() => console.log("MDATA Gifto " + " GTO " + Gifto.address + " af3e1ab6-096b-4bff-9c2a-238bc69740f2"));
};
