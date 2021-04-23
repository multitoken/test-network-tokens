// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Curve is BaseCoin {
    constructor() ERC20("Curve", "CRV") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
