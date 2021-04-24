import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Nav() {
    return (
        <div className="dashboard-nav">
            <nav className="nav-close">
            <div className="nav-components">
                <p className="bi bi-graph-up"><span>Investment</span></p>
                <Link to="/dashboard/cardsandbanks" style={{margin:'0', padding:'0', textDecoration: 'none'}}>
                <p className="bi bi-credit-card"><span>Cards & Banks</span></p> 
                </Link>
                <Link to="/dashboard/account" style={{margin:'0', padding:'0', textDecoration: 'none'}}>
                <p className="bi bi-person"><span>Accounts</span></p>
                </Link>
                <Link to="/dashboard/settings" style={{margin:'0', padding:'0', textDecoration: 'none'}}>
                <p className="bi bi-gear-fill"><span>Settings</span></p>   
                </Link>            
            </div>
            <hr />
            <div id='nav-social'>
            <a href='#' id='social' className="bi bi-instagram" />
            <a href='#' id='social' className="bi bi-facebook" />
            <a href='#' id='social' className="bi bi-twitter" />
            </div>
            </nav>
        </div>
    )
}
