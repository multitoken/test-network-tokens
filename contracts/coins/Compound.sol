// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Compound is BaseCoin {
    constructor() ERC20("Compound", "COMP") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
