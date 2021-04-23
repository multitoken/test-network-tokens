const Oneinch = artifacts.require("Oneinch");

module.exports = function(deployer) {
  deployer.deploy(Oneinch).then(() => console.log("MDATA Oneinch " + " 1INCH " + Oneinch.address + " 55a7b511-5d79-4a8f-ab38-487f8225b415"));
};
