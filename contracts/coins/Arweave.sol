// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Arweave is BaseCoin {
    constructor() ERC20("Arweave", "AR") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
