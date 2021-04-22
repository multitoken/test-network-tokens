// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Audius is BaseCoin {
    constructor() ERC20("Audius", "AUDIO") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
