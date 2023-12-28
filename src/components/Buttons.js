// 0xd413dcae6748e2fd4bad7166DD69f7912D5A6A11
import {NavLink} from "react-router-dom"
import Yeet from "./Yeet"
import {web3} from "./SmartContract";
import { myContract } from "./SmartContract";
import { useNavigate } from "react-router-dom";


const accounts = await web3.eth.getAccounts();


const Buttons = () => {

    const navigate = useNavigate();

async function metamask()   {
    if(typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({method: "eth_requestAccounts"});
            const accounts = await web3.eth.getAccounts();
            console.log("Account: ",accounts[0]);
            alert("Reload the page to load your metamask info!");

        }catch (error) {
            console.log(error);
        }

    } else {
        console.log("No metamask installed");
    }
}




async function becomeBorrower() {
    try{
    await myContract.methods.becomeBorrower().send({
            from: accounts[0],
            value: 300000000000
        })
    }catch(error) {
        console.log(error);
        var errormsg = error.code;
        if(errormsg != 4001) {
            alert("Smart contract error! you are trying to register as both a lender and a borrower");
        }
        return;
    }
    navigate("/Borrower");
    
}

async function becomeLender() {
 
        try{
        await myContract.methods.becomeLender().send({
                from: accounts[0],
                value: 300000000000
            })

        }catch(error) {
            var errormsg = error.code;
            console.log(errormsg);
            if(errormsg != 4001){
                alert("Smart contract error! you are trying to register as both a lender and a borrower");
                console.log(error);
            }
            return;
        }
        navigate("/Lender");
    
}



 
    return (
            <>
            <div className="buttonContainer">
            <button onClick={metamask}className="greetButton" >Connect <span className="metamaskSpan">Metamask</span></button>
            </div>
            <div className="buttonContainer">
            <button onClick={becomeBorrower} className="greetButton">Become a <span className="borrowSpan">borrower!</span></button>
            <button  onClick={becomeLender} className="greetButton">Become a <span className="lenderSpan">Lender!</span></button>
            </div>
            <Yeet/>
            </>
    )

}

export default Buttons;


