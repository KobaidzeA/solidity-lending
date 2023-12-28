import { myContract } from "./SmartContract";
import { web3 } from "./SmartContract";
const accounts = await web3.eth.getAccounts();

async function closeAcc() {
    try {
        await myContract.methods.closeAccount().send({
            from: accounts[0]
        });
    } catch(error) {
        console.log(error);
    }
}

async function fundAccount() {
    var valueAmount = window.prompt("How much would you like to fund to your account?");
    console.log(valueAmount);
    try {
        await myContract.methods.fundAccount().send({
            from: accounts[0],
            value: parseInt(valueAmount,10)
        })
    } catch(error) {
        console.log(error);
    }
}

async function withDraw() {
    try {
        await myContract.methods.withDrawEarnings().send({
            from: accounts[0]
        });
    } catch(error) {
        console.log(error);
    }
}



export default function LenderButtons() {
    return(
        <>
        <div className="functionDiv"> 
            <div className="buttonContainer">
            <button  onClick={closeAcc} className="functionButton"><span className="closeSpan">Close Account</span></button>
            </div>
            <div className="buttonContainer">
            <button onClick={fundAccount} className="functionButton"><span className="loanSpan">Fund Account</span></button>
            </div>
            <div className="buttonContainer">
            <button onClick={withDraw} className="functionButton"><span className="repaySpan">Withdraw earnings</span></button>
            </div>
        </div>
        </>
    )
}