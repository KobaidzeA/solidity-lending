import Navbar from "../components/Navbar.js"
import LenderData from "../components/LenderData.js"
import LenderGreet from "../components/LenderGreet.js"
import LenderButtons from "../components/LenderButtons.js"
export default function Lender() {
    return(
        <><Navbar />
        <LenderGreet/>
        <div className="borrowFlex">
            <LenderData/>
            <LenderButtons/>
        </div>
        </>

    )
}