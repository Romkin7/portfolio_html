import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <h2 id="Brand">Roman Tuomisto</h2>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </nav>
        </header>
    );
};
export default Header;