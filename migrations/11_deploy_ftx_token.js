const FTXToken = artifacts.require("FTXToken");

module.exports = function(deployer) {
  deployer.deploy(FTXToken);
};
