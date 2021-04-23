const Bittorrent = artifacts.require("Bittorrent");

module.exports = function(deployer) {
  deployer.deploy(Bittorrent).then(() => console.log("MDATA Bittorrent " + " BTT " + Bittorrent.address + " 03ae15e1-4a96-4ba4-9758-e27a85c52cb9"));
};
