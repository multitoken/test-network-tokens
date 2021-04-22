// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Uma is BaseCoin {
    constructor() ERC20("UMA", "UMA") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
