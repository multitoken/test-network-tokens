// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract ThetaToken is BaseCoin {
    constructor() ERC20("Theta Token", "THETA") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
