const Hxro = artifacts.require("Hxro");

module.exports = function(deployer) {
  deployer.deploy(Hxro).then(() => console.log("MDATA Hxro " + " HXRO " + Hxro.address + " deb9c9ae-7f8b-44ee-8f04-82cc149b5fe5"));
};
