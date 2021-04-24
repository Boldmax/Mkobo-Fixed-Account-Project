import React from 'react';
import { InputBar, BackButton } from "./AccountNav.styled";



export default function Nextofkin() {
    return (
        <div className="InvestmentDetails">
            <h2 id="header">Next of Kin Details</h2>
            <span>Your next of kin who is your closest living blood relative is very important. In
            a case where we are unable to reach you for a long period of time, or if the
            person dies, your next of kin will be contacted.</span>
            <form className="contentBody">
                
               
                <label>First Name</label>
                <InputBar />
                <label>Last Name</label>
                <InputBar /> 
                <label>Relationship</label>
                <InputBar />
                <label>Phone Number</label>
                <InputBar type="email" />
                <label>Email</label>
                <InputBar />
                <label>Address</label>
                <InputBar />
                <BackButton id='BackButton2' >Update</BackButton>
            </form>
        </div>
    )
}
