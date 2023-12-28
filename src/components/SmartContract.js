import Web3 from 'web3'
import getABI from './ABI';

var web3, myContract ,accounts;

try {
    if(window.ethereum) {
        web3 = new Web3(window.ethereum);
        const contractAddress = "0x431104895b0F0377000001c33B4875237Fbf4C95";
        myContract = new web3.eth.Contract(getABI(),contractAddress);
        accounts = await web3.eth.getAccounts();
    } else {
        throw new Error("No ethereum provider deteced");
    }
   
} catch(error) {
    console.log(error);
}


export {web3,myContract,accounts};

