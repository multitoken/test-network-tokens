const ThetaToken = artifacts.require("ThetaToken");

module.exports = function(deployer) {
  deployer.deploy(ThetaToken).then(() => console.log("MDATA ThetaToken " + " THETA " + ThetaToken.address + " ddb361c5-0827-4324-a9ba-ee4fdbf475d9"));
};
