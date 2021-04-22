// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Flow is BaseCoin {
    constructor() ERC20("Flow", "FLOW") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
