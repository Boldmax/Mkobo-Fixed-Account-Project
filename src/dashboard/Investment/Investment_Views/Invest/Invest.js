import React from 'react';
import { ViewInvestCard, Title, Head1, Head2, Head3, Head4, Rate, BackButton, Select, Filter } from "./invest.style";
import './invest.css';
import "bootstrap-icons/font/bootstrap-icons.css";
/* import InvestForm from './InvestForm'; */


const states = {
    options: [
        {
            Name: "HYPA Deposit",
            InterestRate: "12.65%",
            tenure: "180",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 0
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "10.65%",
            tenure: "270",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 1
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "20.25%",
            tenure: "360",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 2
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "12.25%",
            tenure: "270",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 3
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "15.25%",
            tenure: "180",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 4
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "14.25%",
            tenure: "360",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 5
        },
        /* {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            tenure: "270",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 6
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25%",
            tenure: "125",
            InvestedCapital: "1,000,000",
            Interest: "1,000,000.00",
            Investor: "Investor",
            Key: 7
        }, */
    ]
}

export default function Invest({ close }) {
    return (
        <div className='container'>
            <div className='filter'>
                <Filter><i className='bi bi-funnel' />Filter by</Filter>
                <Select>
                    <option>Tenure</option>
                    <option>Rate</option>
                </Select>
            </div>
            <div className='CardContainer'>
                {states.options.map((state, key) => {
                    return <ViewInvestCard key={key}>
                        <Title>{state.Name}</Title>
                        <label id='labela1'>Tenure</label>
                        <Head1><Rate>{state.tenure} days</Rate></Head1>
                        <label id='labela'>Rate</label>
                        <Head2>{state.InterestRate}</Head2>
                        <hr />
                        <label id='labelb'>Min. Amount</label>
                        <Head3>&#8358;{state.InvestedCapital}</Head3>
                        <label id='labelc'>Max. Amount</label>
                        <Head4>&#8358;{state.Interest}</Head4>
                        <BackButton onClick={close}>Invest now</BackButton>
                    </ViewInvestCard>
                })}
            </div>

        </div>
    )
}
