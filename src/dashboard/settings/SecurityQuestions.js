import React from 'react';
import { InputBar, BackButton } from "./SettingsNav.styled";

export default function SecurityQuestions() {
    return (
        <div className="InvestmentDetails">
            <h2 id="PS">Security Questions</h2>
            <form className="contentBody">
                <label>Security Question 1</label>
                <select name="securityQuestion">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option disabled defaultValue hidden>select security question</option>
                </select>
                <label>Answer</label>
                <InputBar placeholder="Enter answer here" />
                <label>Security question 2</label>
                <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option disabled defaultValue hidden>select security question</option>
                </select>
                <label>Answer</label>
                <InputBar placeholder="Enter answer here" />
                <BackButton id='BackButton1' >Update</BackButton>
            </form>
        </div>
    )
}
