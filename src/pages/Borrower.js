import Navbar from "../components/Navbar.js"
import Greeting from "../components/UserGreeting.js"
import AccountData from "../components/AccountData.js"
import BorrowerButtons from "../components/BorrowerButtons.js"
export default function Borrower() {
    return(
        <>
        
        <Navbar />
        <Greeting />
        <div className="borrowFlex">
        <AccountData />
        <BorrowerButtons />
        </div>
        </>
    )
}