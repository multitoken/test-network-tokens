const Neo = artifacts.require("Neo");

module.exports = function(deployer) {
  deployer.deploy(Neo).then(() => console.log("MDATA Neo " + " NEO " + Neo.address + " 0f44ae9f-7b1b-4136-94c9-5e649a3eb090"));
};
