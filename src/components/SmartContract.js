import Web3 from 'web3'
import getABI from './ABI';

let web3, myContract;

try {
    web3 = new Web3(window.ethereum);
    const contractAddress = "0x2602E87c341C59709835F91036945d3493243159";
    myContract = new web3.eth.Contract(getABI(),contractAddress);
} catch(error) {
    console.log(error);
}


export {web3,myContract,accounts};

