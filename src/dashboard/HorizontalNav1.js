import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../LandingPage/logo.png";
import './dashboard.css';
import { Link } from "react-router-dom";


export default function HorizontalNav() {
    return (
        <div>
            <nav style={{ backgroundColor: "#fff" }} className="navbar navbar-expand-lg navbar-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <img src={logo} alt="" style={{ maxWidth: "1500px", width: "8rem", height: "3.5rem", marginLeft: "-5rem", paddingLeft: "0" }} className="d-inLinkne-block aLinkgn-top" />
                    </a>
                    <button className="navbar-toggler hide" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-Linkst text-primary" style={{ fontSize: "2.9rem" }}></span>
                    </button>
                    <div className="collapse navbar-collapse" >
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}