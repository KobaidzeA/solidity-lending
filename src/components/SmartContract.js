import Web3 from 'web3'
import getABI from './ABI';

const web3 = new Web3(window.ethereum);
const contractAddress = "0x4242B5A3Ac2A11E4cE73273d515D4b6DeE48f074";
var myContract = new web3.eth.Contract(getABI(),contractAddress);
const accounts = web3.eth.getAccounts();

export {web3,myContract,accounts};

