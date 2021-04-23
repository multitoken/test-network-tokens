// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract BitcoinCash is BaseCoin {
    constructor() ERC20("Bitcoin Cash", "BCH") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
