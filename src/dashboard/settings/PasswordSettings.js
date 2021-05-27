import React from 'react';
import { InputBar, BackButton } from "./SettingsNav.styled";

export default function PasswordSettings() {
    return (
        <div className="InvestmentDetails">
            <h2 id="PS">Password Settings</h2>
            <form className="contentBody">
                <label>Old Password</label>
                <InputBar />
                <label>New Password</label>
                <InputBar />
                <label>Comfirm Password</label>
                <InputBar />
                <BackButton id='BackButton1b' >Update</BackButton>
            </form>
        </div>
    )
}
