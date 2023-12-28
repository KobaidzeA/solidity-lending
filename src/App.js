import {Routes, Route} from "react-router-dom"
import Welcome from "./pages/Welcome.js"
import Borrower from "./pages/Borrower.js"
import About from "./pages/About.js"
import Lender from "./pages/Lender.js"
import Guide from "./pages/Guide.js"
export default function App() {
    return (
        <Routes>
            <Route path="/Borrower"  element={<Borrower/>}/>
            <Route path="/About"  element={<About/>}/>
            <Route path="/Guide"  element={<Guide/>}/>
            <Route path="/"  element={<Welcome/>} />
            <Route path="/Lender" element={<Lender/>}/>
           
        </Routes>
    )
}