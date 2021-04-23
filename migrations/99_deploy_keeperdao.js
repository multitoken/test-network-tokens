const Keeperdao = artifacts.require("Keeperdao");

module.exports = function(deployer) {
  deployer.deploy(Keeperdao).then(() => console.log("MDATA Keeperdao " + " ROOK " + Keeperdao.address + " 75c20ffd-d1f8-4f7e-84ff-e2f3f5c6479e"));
};
