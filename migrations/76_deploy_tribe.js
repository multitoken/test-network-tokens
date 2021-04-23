const Tribe = artifacts.require("Tribe");

module.exports = function(deployer) {
  deployer.deploy(Tribe).then(() => console.log("MDATA Tribe " + " TRIBE " + Tribe.address + " 88db37d2-5679-435f-9d18-eadbcf2811f1"));
};
