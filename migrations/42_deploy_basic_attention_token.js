const BasicAttentionToken = artifacts.require("BasicAttentionToken");

module.exports = function(deployer) {
  deployer.deploy(BasicAttentionToken).then(() => console.log("MDATA BasicAttentionToken " + " BAT " + BasicAttentionToken.address + " 4db01dd4-686b-4bdc-a143-06b616101b39"));
};
