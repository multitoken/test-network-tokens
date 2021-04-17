// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract USDCoin is BaseCoin {
    constructor() ERC20("USD Coin", "USDC") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
