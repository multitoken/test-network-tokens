const Curve = artifacts.require("Curve");

module.exports = function(deployer) {
  deployer.deploy(Curve).then(() => console.log("MDATA Curve " + " CRV " + Curve.address + " 0206fbbe-d7eb-422e-b94e-5033985e05d6"));
};
