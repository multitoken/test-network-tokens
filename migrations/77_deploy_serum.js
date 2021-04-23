const Serum = artifacts.require("Serum");

module.exports = function(deployer) {
  deployer.deploy(Serum).then(() => console.log("MDATA Serum " + " SRM " + Serum.address + " 09483b7c-049b-4a57-b2e9-9453cfe743ab"));
};
