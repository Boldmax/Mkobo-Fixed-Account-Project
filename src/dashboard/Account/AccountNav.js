import React from 'react';
import { ButtonBar } from "./AccountNav.styled";
import { Link } from "react-router-dom";


export default function AccountNav() {
    return (
        <div className="AccountNav">
            <h3>Accounts</h3>
            <div className="h-nav">
                <ButtonBar>
                    <Link to="/dashboard/account/myprofile" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                        <p>My Profile </p></Link>
                </ButtonBar>
                <ButtonBar>
                    <Link to="/dashboard/account/Nextofkin" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                        <p>Next of Kin Details </p> </Link>
                </ButtonBar>
                <ButtonBar>
                    <Link to="/dashboard/account/activeinvestment" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                        <p>View Active Investment </p> </Link>
                </ButtonBar>
                <ButtonBar>
                    <Link to="/dashboard/Bankdetails" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                        <p>Download Investment Certificate </p> </Link>
                </ButtonBar>

            </div>
            <div id="logout">
                <ButtonBar>
                    <Link to="/dashboard/Bankdetails" style={{ color: 'rgba(203, 63, 63, 1)', padding: '0', margin: '0', textDecoration: 'none', fontSize: '16px', marginTop: '1.5rem' }}>
                        <p>Sign Out </p> </Link>
                </ButtonBar>
            </div>
        </div>
    )
}
