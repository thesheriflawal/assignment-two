// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Coredao {
   string public text;

   function setMessage(string memory _text) public {
       text = _text;
   }

   function getMessage() public view returns (string memory) {
       return text;
   }
}