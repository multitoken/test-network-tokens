// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract FtxToken is BaseCoin {
    constructor() ERC20("FTX Token", "FTT") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
