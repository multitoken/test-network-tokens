// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract CargoGems is BaseCoin {
    constructor() ERC20("Cargo Gems", "GEM") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
