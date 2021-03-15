pragma solidity ^0.8.2;

contract HelloWorld {
  string myName = "Adam";

  function getMyName() public view returns (string memory) { 
    return myName;
  }

  function changeMyName(string memory _newName) public {
    myName = _newName;
  }
}