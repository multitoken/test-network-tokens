const BinanceUsd = artifacts.require("BinanceUsd");

module.exports = function(deployer) {
  deployer.deploy(BinanceUsd).then(() => console.log("MDATA BinanceUsd " + " BUSD " + BinanceUsd.address + " 5da7bde4-61e9-4a6f-9fc3-7ed66effb198"));
};
