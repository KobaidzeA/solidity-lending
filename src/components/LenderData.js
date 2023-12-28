import { myContract } from "./SmartContract"
import { web3 } from "./SmartContract";
import React, {useState, useEffect} from 'react';

export default function LenderData() {
    const [userStatus,setUserStatus] = useState("Suspended");
    const [contribution,setContribution] = useState(0);
    const [earnings,setEarnings] = useState(0);
    const [userAddress,setAddress] = useState("0x0");
    useEffect(() =>{
        async function getData() {
            try {
                let theAccount;
                let myStatus = "a";
                const accounts = await web3.eth.getAccounts();
                const allAccs = await myContract.methods.lenderArrJS().call();
                for(let i = 0; i < allAccs.length; i++) {
                    if(accounts[0] === allAccs[i][0]) {
                        theAccount = allAccs[i];
                    }
                }
                console.log(theAccount);
                if(theAccount[4] === false) {
                    myStatus = "Active";
                } else {
                    myStatus = "Suspended";
                }
                setUserStatus(myStatus);
                setContribution(theAccount[1]);
                setEarnings(theAccount[3]);
                setAddress(theAccount[0]);
            } catch(error) {
                console.log(error);
            } 

        };
        getData();
        const intervalId = setInterval(() => {
          getData();
        },10000);
        return () => clearInterval(intervalId);
    },[]);
    return (
        <div className="dataDiv">
        <h3>Account Details</h3>
        <ul>
            <li>
                <span className="dataSpan">Account Status</span>: {userStatus}
            </li>
            <li>
            <span className="dataSpan">Contributed Amount</span>: {contribution}
            </li>
            <li>
            <span className="dataSpan">Earnings amount</span>: {earnings}
            </li>
            <li>
            <span className="dataSpan">Account address</span>:  {userAddress}
            </li>
        </ul>
    </div>
)
}