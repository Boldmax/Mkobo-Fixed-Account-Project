import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Nav({ click }) {

    return (
        <div className={click ? "nav-components" : "nav-components active"}>
            <nav className="nav-close">
                <div className="nav-components">

                    <Link to="/dashboard/Investment" style={{ margin: '0', padding: '0', textDecoration: 'none' }} className="active">
                        <p className="bi bi-graph-up "><span>Investment</span></p>
                    </Link>
                    <Link to="/dashboard/cardsandbanks" style={{ margin: '0', padding: '0', textDecoration: 'none' }} className="active">
                        <p className="bi bi-credit-card"><span>Cards & Banks</span></p>
                    </Link>
                    <Link to="/dashboard/account" style={{ margin: '0', padding: '0', textDecoration: 'none' }} className="active">
                        <p className="bi bi-person"><span>Accounts</span></p>
                    </Link>
                    <Link to="/dashboard/settings" style={{ margin: '0', padding: '0', textDecoration: 'none' }} className="active">
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
