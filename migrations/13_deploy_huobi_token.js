const HuobiToken = artifacts.require("HuobiToken");

module.exports = function(deployer) {
  deployer.deploy(HuobiToken);
};
