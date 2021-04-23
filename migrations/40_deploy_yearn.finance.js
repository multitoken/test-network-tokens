const YearnFinance = artifacts.require("YearnFinance");

module.exports = function(deployer) {
  deployer.deploy(YearnFinance).then(() => console.log("MDATA YearnFinance " + " YFI " + YearnFinance.address + " 75af0d92-7ec7-4279-bd5b-05eafa1090bf"));
};
