import React from 'react';
import { Table, Title, InvestmentType, Amount, Time } from "./InvestmentHistory.style";
import './InvestmentHistory.css';

const states = {
    element: [
        {
            type: "Mkobo HYPA deposit",
            time: "2:30 pm",
            amount: "50,000.00",
            credit: true
        },
        {
            type: "Mkobo HYPA  Account Liquidated",
            time: "2:30 pm",
            amount: "50,000.00",
            credit: false
        },
        {
            type: "Mkobo HYPA deposit",
            time: "2:30 pm",
            amount: "50,000.00",
            credit: true
        },
        {
            type: "Mkobo HYPA  Account Liquidated",
            time: "2:30 pm",
            amount: "50,000.00",
            credit: false
        },
        {
            type: "Mkobo HYPA deposit",
            time: "2:30 pm",
            amount: "50,000.00",
            credit: true
        }
    ]
}

export default function InvestmentHistory() {
    return (
        <div className='history_body'>
            <hr />
            <Title>
                Transaction History
            </Title>
            <div className='history_lines'>
                {states.element.map((state, key) => 
                <Table key={key}>
                    <InvestmentType>{state.type}</InvestmentType>
                    <Time>{state.time} </Time>
                    <Amount credit={state.credit}>&#8358;{state.amount} </Amount>
                 </Table>
                )}
            </div>
        </div>
    )
}
