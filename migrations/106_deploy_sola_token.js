const SolaToken = artifacts.require("SolaToken");

module.exports = function(deployer) {
  deployer.deploy(SolaToken).then(() => console.log("MDATA SolaToken " + " SOL " + SolaToken.address + " 3a14ee00-af22-42c6-8c5c-6caad4a6f811"));
};
