import { myContract } from "./SmartContract";
import { web3 } from "./SmartContract";
import { accounts } from "./SmartContract";
var lenderData = [];
var borrowerData = [];
const converter = 100;
try{
     lenderData = await myContract.methods.lenderArrJS().call();
     borrowerData = await myContract.methods.borrowerArrJS().call();
} catch(error) {
    console.log(error);
}
async function closeAcc() {
    try {
        await myContract.methods.closeBorrower(100).send({
            from: accounts[0]
        });
    } catch(error) {
        console.log(error);
    }
}
let notBlockedLenders = [];
for(let i = 0; i < lenderData.length; i++) {
    if(lenderData[i][4] === false) {
        notBlockedLenders.push(lenderData[i]);
    }
}
const customSort =(a,b) => b[2] - a[2];
var sortedLenders = [...notBlockedLenders].sort(customSort);
async function getLoan() {
    let myUser = [];
    for(let i = 0 ; i < borrowerData.length; i++) {
        if(accounts[0] === borrowerData[i][0]) {
            myUser = borrowerData[i];
        }
    }
    console.log(parseInt(myUser[1],10)*20);
    var loanAmount = window.prompt("Enter the amount you wish to borrow, your limit is "+parseInt(myUser[1],10)*converter+" wei");
    if(loanAmount === null || isNaN(parseInt(loanAmount))) {
        alert("Invalid amount input!");
        return;
    }
    var forSort = parseInt(loanAmount,10);
    var lenderArr =[];
    var lenderAmounts = [];
    if(loanAmount > myUser[1]*converter) {
        alert("The amount you have entered is more than your limit! try again");
        return
    } 
    for(var i=0; i<sortedLenders.length; i++) {
        console.log(parseInt(sortedLenders[i][2],10));
        forSort -= parseInt(sortedLenders[i][2],10);
        lenderArr.push(sortedLenders[i][0]);
        lenderAmounts.push(parseInt(sortedLenders[i][1],10));
        if(forSort < 0) {
            console.log("recorded it being less");
            lenderAmounts[i] = lenderAmounts[i] - forSort*-1;
            console.log(lenderAmounts[i] - forSort*-1);
            break; 
        }
        
    }
    console.log(lenderArr);
    console.log(lenderAmounts);
    alert("Accept every transaction!");
    const batch = new web3.BatchRequest();
     for(var i=0; i<lenderAmounts.length; i++) {
        batch.add(myContract.methods.updateLoan(accounts[0],lenderArr[i],lenderAmounts[i]).send.request({
            from: accounts[0]
        }));
    }
    batch.add(myContract.methods.borrowMoney(loanAmount).send.request({from: accounts[0]}));
    batch.execute();
}

async function repay() {
    try {
        const myLoan = await myContract.methods.getSpecificLoan(accounts[0]).call({
            from: accounts[0]
        });
        var totalDebtAmount=0;
        for(var i=0; i<myLoan[1].length; i++) {
            totalDebtAmount += parseInt(myLoan[1][i],10);
            console.log("for cycle did = "+totalDebtAmount);
        }
        console.log("paying back ="+totalDebtAmount);
        await myContract.methods.payBack().send({
            from: accounts[0],
            value: totalDebtAmount*2
        });
    } catch(error) {
        console.log(error);
    }
}

export default function BorrowerButtons() {
    return(
        <>
        <div className="functionDiv"> 
            <div className="buttonContainer">
            <button  onClick={closeAcc} className="functionButton"><span className="closeSpan">Close Account</span></button>
            </div>
            <div className="buttonContainer">
            <button onClick={getLoan} className="functionButton"><span className="loanSpan">Get a Loan</span></button>
            </div>
            <div className="buttonContainer">
            <button onClick={repay} className="functionButton"><span className="repaySpan">Pay back</span></button>
            </div>
        </div>
        </>
    )
}