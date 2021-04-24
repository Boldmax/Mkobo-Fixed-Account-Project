import React from 'react';
import { InputBar, BackButton } from "./AccountNav.styled";
import image from "./Ellipse2.png";



export default function InvestmentDetails() {
    return (
        <div className="InvestmentDetails">
            <h2>My Profile</h2>
            <form className="contentBody">
                <div className="profileImage">
                    <img src={image} /> 
                <a href='#'>Tap to change profile image</a>
                </div>
                <label>BVN</label>
                <InputBar />
                <label>First Name</label>
                <InputBar />
                <label>Last Name</label>
                <InputBar />
                <label>Gender</label>
                <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label>Date of Birth</label>
                <input type='date' />
                <label>Address</label>
                <InputBar />
                <BackButton id='BackButton1' >Update</BackButton>
            </form>
        </div>
    )
}
