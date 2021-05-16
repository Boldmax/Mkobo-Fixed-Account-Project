import React from 'react';
import { ViewInvestCard, Title, Head1, Head2, Head3, Head4, Rate, BackButton } from './investStyleItems.style';
import './viewInvestment.css'


const states = {
    options: [
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000,000.00",
            Interest: "1,016,250.00",
            Key: 0
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000,000.00",
            Interest: "1,016,250.00",
            Key: 1
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000,000.00",
            Interest: "1,016,250.00",
            Key: 2
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000,000.00",
            Interest: "1,016,250.00",
            Key: 3
        },
    ]
}

export default function ViewInvestment() {
    return (
        <div className='container'>
            <div></div>
            <div className='CardContainer'>
                {states.options.map((state, key) => {
                    return <ViewInvestCard key={key}>
                        <Title>{state.Name}</Title>
                        <Head1><Rate>{state.InterestRate}</Rate> returns in 270 days</Head1>
                        <label id='label4'>Value on maturity</label>
                        <Head2> {state.Interest}</Head2>
                        <label id='label5'>Invested Capital</label>
                        <Head3>{state.InvestedCapital}</Head3>
                        <label id='label6'>Matures on</label>
                        <Head4>{state.MaturityDate}</Head4>
                        <BackButton>Withdraw</BackButton>
                    </ViewInvestCard>
                })}


            </div>
        </div>
    )
}
