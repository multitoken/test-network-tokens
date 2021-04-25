const CurveDAOToken = artifacts.require("CurveDAOToken");

module.exports = function(deployer) {
  deployer.deploy(CurveDAOToken);
};
