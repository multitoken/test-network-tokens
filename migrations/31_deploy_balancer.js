const Balancer = artifacts.require("Balancer");

module.exports = function(deployer) {
  deployer.deploy(Balancer);
};
