import React from 'react';
import { ButtonBar } from "./SettingsNav.styled";
import { Link } from "react-router-dom";

export default function SettingsNav() {
    return (
        <div className="AccountNav">
             <h3>Security Settings</h3>
            <div className="h-nav">
                <ButtonBar>
                    <Link to="/dashboard/setting/passwordsettings" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                        <p>Password Settings </p></Link>
                </ButtonBar>
                <ButtonBar>
                    <Link to="/dashboard/settings/securitysettings" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                        <p>Security Questions </p> </Link>
                </ButtonBar>
            </div>
        </div>
    )
}
