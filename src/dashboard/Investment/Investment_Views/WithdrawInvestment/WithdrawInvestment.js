import React from 'react';
import { ViewInvestCard, Title, Head1, Head2, Head3, Head4, Rate, BackButton } from './withdrawInvestment.style';
import './withdrawInvestment.css';


const states = {
    options: [
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
            Key: 0
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
            Key: 1
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
            Key: 2
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
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
                        <label id='label4'>Matures on</label>
                        <Head2>{state.MaturityDate}</Head2>
                        <label id='label5'>Invested Capital</label>
                        <Head3>{state.InvestedCapital}</Head3>
                        <label id='label6'>Interest</label>
                        <Head4>{state.Interest}</Head4>
                        <BackButton>Withdraw</BackButton>
                    </ViewInvestCard>
                })}


            </div>
        </div>
    )
}
