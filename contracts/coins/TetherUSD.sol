// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Tether is BaseCoin {
    constructor() ERC20("Tether USD", "USDT") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 6;
    }
}
