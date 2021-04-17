// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


abstract contract BaseCoin is ERC20 {
    event Log(string message);

    function mintForMe(uint256 amount) public virtual {
        ERC20._mint(msg.sender, amount);
    }
}
