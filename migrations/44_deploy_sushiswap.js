const Sushiswap = artifacts.require("Sushiswap");

module.exports = function(deployer) {
  deployer.deploy(Sushiswap).then(() => console.log("MDATA Sushiswap " + " SUSHI " + Sushiswap.address + " 15571a03-2262-4c7c-9890-7fa03dfdf406"));
};
