import { useNavigate } from 'react-router-dom';
import { myContract } from './SmartContract';
import { accounts } from './SmartContract';
import { web3 } from './SmartContract';

//const accounts = await web3.eth.getAccounts();

export default  function Yeet() {
   console.log(accounts);
   const navigate = useNavigate();
   async function Destination() {
   var destination;
   if(
      await myContract.methods.isBorrower().call({
         from: accounts[0]
      })
   ) {destination = "Borrower";}
   else if(
      await myContract.methods.isLender().call({
         from: accounts[0]})
   ){destination= "Lender";}
   else {alert("You are not registered in the system!"); return}
   navigate("/"+destination);
   }
   return (
      <div className="buttonContainer">
      <button  onClick={Destination} className="greetButton">Login</button>
      </div>
   )
  
   
  
}