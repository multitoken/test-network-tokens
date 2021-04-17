const Migrations = artifacts.require("migrate/Migrations");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};
