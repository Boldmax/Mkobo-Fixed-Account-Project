import React from 'react';
import { ViewInvestCard, Title, Head1, Head2, Head3, Head4, Rate, BackButton } from "./invest.style";
import './invest.css';


const states = {
    options: [
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 0
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 1
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 2
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 3
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 3
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 3
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 3
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 3
        },
    ]
}

export default function Invest() {
    return (
        <div className='container'>
            <div></div>
            <div className='CardContainer'>
                {states.options.map((state, key) => {
                    return <ViewInvestCard key={key}>
                        <Title>{state.Name}</Title>
                        <Head1><Rate>{state.InterestRate}</Rate></Head1>
                        <label id='labela'>Matures on</label>
                        <Head2>{state.MaturityDate}</Head2>
                        <hr />
                        <label id='labelb'>{state.Investor}</label>
                        <Head3>{state.InvestedCapital}</Head3>
                        <label id='labelc'>Interest</label>
                        <Head4>{state.Interest}</Head4>
                        <BackButton>Invest now</BackButton>
                    </ViewInvestCard>
                })}
            </div>
        </div>
    )
}
