const ThunderToken = artifacts.require("ThunderToken");

module.exports = function(deployer) {
  deployer.deploy(ThunderToken).then(() => console.log("MDATA ThunderToken " + " TT " + ThunderToken.address + " 3fc85ac9-27f6-42c2-9ed4-95b4d8b86107"));
};
