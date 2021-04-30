const ReserveRights = artifacts.require("ReserveRights");

module.exports = function(deployer) {
  deployer.deploy(ReserveRights);
};
