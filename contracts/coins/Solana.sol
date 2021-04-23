// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Solana is BaseCoin {
    constructor() ERC20("Solana", "SOL") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
