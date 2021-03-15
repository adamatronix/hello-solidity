pragma solidity ^0.7.4;

contract HelloWorld {
  string myName = "Adam";

  function getMyName() public view returns (string memory) { 
    return myName;
  }

  function changeMyName(string memory _newName) public {
    myName = _newName;
  }
}