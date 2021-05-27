import React, { useState } from 'react';
import logo from "../LandingPage/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import { Navbutton } from "./page.styled"



export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar" >
                <div className="nav-container">
                    <NavLink to="/" className="navbar-brand" style={{ margin: "0", padding: "0" }}>
                        <img src={logo} alt="" style={{ width: "98px", height: "3.5rem", paddingLeft: "0" }} id="imageMove" />
                    </NavLink>
                    <div id="spacediv" />
                    <div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <a activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick} href="#">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}>
                                    FAQs
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}>
                                    Blog
                                </a>
                            </li>

                            <li className="nav-links">
                                <NavLink to="/loginform" style={{ margin: "0", padding: "0" }}>
                                    <Navbutton primary style={{ lineHeight: "21px", fontWeight: "600" }} type="button">Log in</Navbutton>
                                </NavLink>
                            </li>
                            <li className="nav-links">
                                <NavLink to="/dashboard/Investment" style={{ margin: "0", padding: "0" }}>
                                    <Navbutton style={{ lineHeight: "21px", fontWeight: "600" }} type="button" >Start investing</Navbutton>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div id="nav-buttons">
                        <ul>

                        </ul>
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "bi bi-x" : "bi bi-list"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}
