const Zerox = artifacts.require("Zerox");

module.exports = function(deployer) {
  deployer.deploy(Zerox).then(() => console.log("MDATA Zerox " + " ZRX " + Zerox.address + " b611505b-c286-454e-8980-f6aabdbb354d"));
};
