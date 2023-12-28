import pangolin from "../images/pangolin.png"
import {NavLink} from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="linksNav">
            <img src={pangolin} alt="pangolin-logo"/>
            <ul>
                <li><NavLink className="navLink" to="/">Home</NavLink></li>
                <li><NavLink className="navLink" to="/About">About</NavLink></li>
                <li><NavLink className="navLink" to="/Guide">Guide</NavLink></li>
            </ul>
        </nav>
    );
}
