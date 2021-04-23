const Balancer = artifacts.require("Balancer");

module.exports = function(deployer) {
  deployer.deploy(Balancer).then(() => console.log("MDATA Balancer " + " BAL " + Balancer.address + " c47ecc75-5d26-4142-834b-a8274c640e7e"));
};
