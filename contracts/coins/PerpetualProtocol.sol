// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract PerpetualProtocol is BaseCoin {
    constructor() ERC20("Perpetual Protocol", "PERP") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
