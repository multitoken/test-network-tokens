// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract SolaToken is BaseCoin {
    constructor() ERC20("Sola Token", "SOL") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
