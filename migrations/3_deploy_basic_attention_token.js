const BasicAttentionToken = artifacts.require("BasicAttentionToken");

module.exports = function (deployer) {
    deployer.deploy(BasicAttentionToken);
};
