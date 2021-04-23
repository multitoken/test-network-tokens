// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Oneinch is BaseCoin {
    constructor() ERC20("1inch", "1INCH") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
