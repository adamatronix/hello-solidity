const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc');

const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
const web3 = new Web3(provider);
const content = fs.readFileSync('HelloWorld.sol', 'utf-8');

const input = {
  language: 'Solidity',
  sources: {
    'HelloWorld.sol': {
      content,
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const { HelloWorld } = output.contracts['HelloWorld.sol'];
const { abi, evm } = HelloWorld;

const contract = new web3.eth.Contract(abi);

console.log(contract);