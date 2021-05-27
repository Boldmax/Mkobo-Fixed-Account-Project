import React from 'react';
import { InputBar, BackButton } from "./SettingsNav.styled";
import './securityQuestions.css';

export default function SecurityQuestions() {
    return (
        <div className="InvestmentDetails">
            <h2 id="PS">Security Questions</h2>
            <form className="contentBody">
                <label>Security Question 1</label>
                <select name="securityQuestion" className='security_questions'>
                    <option value="first">What was te name of your favorite pet?</option>
                    <option value="second">What was te name of your best friend?</option>
                    <option value="third">Where were you born?</option>
                    <option disabled defaultValue hidden>select security question</option>
                </select>
                <label>Answer</label>
                <InputBar placeholder="Enter answer here" />
                <label>Security question 2</label>
                <select className='security_questions'>
                    <option value="fourth">What is the name of your first child?</option>
                    <option value="fifth">What is your favorite color called?</option>
                    <option value="sixth">What brand is your first smart phone?</option>
                    <option disabled defaultValue hidden>select security question</option>
                </select>
                <label>Answer</label>
                <InputBar placeholder="Enter answer here" />
                <BackButton id='BackButton1a' >Update</BackButton>
            </form>
        </div>
    )
}
