// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Ampleforth is BaseCoin {
    constructor() ERC20("Ampleforth", "AMPL") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 9;
    }
}
