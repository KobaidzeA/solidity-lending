export default function GuideText() {
    return(
        <div>
        <p className="aboutParagraph">
            Using the system as a borrower: after registering you can simply log in and get a loan that is determined by your limit, the transaction will fail from metamask
            if the smart contract doesn't have enough funds or if the account is suspended. When paying back you will be returning twice the amount of the loan which will
            make your account active once more and allow you to take out another Loan
            <br />
            <br />
            Using the system as a lender: you can fund the account to determine how much of your wei can be used for loans and once the loans are paid back it will show up as 
            earning that you may withdraw. Once the account is closed the contributed amount will be refunded as well
        </p>
    </div>
    )
}