// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Api3 is BaseCoin {
    constructor() ERC20("API3", "API3") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
