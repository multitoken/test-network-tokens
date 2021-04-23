// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract WootradeNetwork is BaseCoin {
    constructor() ERC20("Wootrade Network", "WOO") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
