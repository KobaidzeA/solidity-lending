import Navbar from "../components/Navbar.js"
import WelcomeMessage from "../components/welcomeMessage.js"
import Buttons from '../components/Buttons.js'
import React from "react";
export default function Welcome() {
    return(
        <div>
            <Navbar/>
            <WelcomeMessage/>
            <Buttons/>
        </div>
    )
}