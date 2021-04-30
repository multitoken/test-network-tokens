// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract Keeperdao is BaseCoin {
    constructor() ERC20("KeeperDAO", "ROOK") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
