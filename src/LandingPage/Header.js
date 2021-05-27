import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import growth from "../LandingPage/HeroImage.png";
import emblem from "../LandingPage/emblem.png";
import ndic from "../LandingPage/ndic_small_logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-body">
            <div className="header-subBody">
                <div className="header-card1">
                    <h1>GROW YOUR WEALTH WITH MKOBO</h1>
                    <p>Earn fantastic return of up to <span>15%</span> per annum with the<span> High Yield Premiun Account</span>
                    (HYPA). HYPA is designed for investors looking to put their money to work in a safe and secure investment.</p>
                    <NavLink to="/dashboard/Investment" style={{ margin: "0", padding: "0", textDecoration: 'none'}}>
                    <button  style={{ fontSize: "1rem" }} type="button" className="btn btn-outline-none">Start Investing</button>
                    </NavLink>
                    <h4>NDIC Insured and CBN Approved</h4>
                    <div id="approval">
                        <img id="img1" src={ndic} alt="" />
                        <img id="img2" src={emblem} alt="" />
                    </div>
                </div>
                <div className="header-card2">
                    <img src={growth} alt="" />
                </div>
            </div>
        </div>
    )
}
