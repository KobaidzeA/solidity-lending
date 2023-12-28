export default function AboutText() {
    return (
        <div>
            <p className="aboutParagraph">This lending/borrowing system is implemented with solidity, hardhat and web3.js as a learning experience. Multiple lenders can 
            contribute to the overall lending pool which then can be loaned to various lenders. Thus when the loan is paid back the interested is handed out to the lenders based
            proportionally on the amount that they contributed. Of course it only functions on the Sepolia test network with no plans to be published on the ETH main net. More in-depth
            documentation can be found in the documentation that is linked here 
            </p>
        </div>
    )
}