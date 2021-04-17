// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Maker is BaseCoin {
    constructor() ERC20("Maker", "MKR") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
