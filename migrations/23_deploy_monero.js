const Monero = artifacts.require("Monero");

module.exports = function(deployer) {
  deployer.deploy(Monero).then(() => console.log("MDATA Monero " + " XMR " + Monero.address + " cd738ecc-ef84-47b5-be73-d064eff3e36e"));
};
