import React, { useState, useEffect } from 'react';
import { myContract, web3 } from "./SmartContract";

export default function AccountData() {
  const [userAddress, setUserAddress] = useState("0x0");
  const [userStatus, setUserStatus] = useState('fsd');
  const [loanAmount, setLoanAmount] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
 useEffect(() =>{
    async function getData() {
        try {
            let myAccount;
            let myDebt = 0;
            let userBlock = "a";
            const retrieved = await myContract.methods.borrowerArrJS().call();
            const accounts = await web3.eth.getAccounts();
            const loanInfo = await myContract.methods.getSpecificLoan(accounts[0]).call();
            for(let i = 0; i < retrieved.length; i++) {
                if(accounts[0] === retrieved[i][0]) {
                    myAccount = retrieved[i];
                   
                }
            }
            
            if(myAccount[2] === false) {
                userBlock = "Active";
            } else {
                userBlock = "Suspended";
            }
            if(loanInfo[0].length != 0 && userBlock === "Suspended" ){ 
              for(let i = 0; i<loanInfo[0].length; i++) {
                myDebt += parseInt(loanInfo[1][i],10);
                console.log("data added")
              }
            }
          console.log("my debt ="+myDebt);
          setLoanAmount(myDebt);
          setUserStatus(userBlock);
          setCreditScore(parseInt(myAccount[1]));
          setUserAddress(myAccount[0]);

        } catch(error) {
            console.log(error);
        }
       
    };
    getData();
    const intervalId = setInterval(() => {
      getData();
    },10000);
    return () => clearInterval(intervalId);
 }, []);

 



  return (
    
    <div className="dataDiv">
      <h3>Account Details</h3>
      <ul>
        <li>
          <span className="dataSpan">Account Status</span>: {userStatus}
        </li>
        <li>
          <span className="dataSpan">Credit score</span>: {creditScore}
        </li>
        <li>
          <span className="dataSpan">Borrowed Amount</span>: {loanAmount}
        </li>
        <li>
          <span className="dataSpan">Account address</span>: {userAddress}
        </li>
      </ul>
    </div>
  );
}
