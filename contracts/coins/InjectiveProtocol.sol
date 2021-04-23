// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract InjectiveProtocol is BaseCoin {
    constructor() ERC20("Injective Protocol", "INJ") {
    }

    function decimals() public override view virtual returns (uint8) {
        return 18;
    }
}
