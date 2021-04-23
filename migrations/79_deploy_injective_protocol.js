const InjectiveProtocol = artifacts.require("InjectiveProtocol");

module.exports = function(deployer) {
  deployer.deploy(InjectiveProtocol).then(() => console.log("MDATA InjectiveProtocol " + " INJ " + InjectiveProtocol.address + " 0e38e60e-02e0-43f7-ad90-2096d23d48b8"));
};
