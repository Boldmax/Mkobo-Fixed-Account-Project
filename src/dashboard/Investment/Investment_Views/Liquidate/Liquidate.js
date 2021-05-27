import React from 'react';
import { ViewInvestCard, Title, Head1, Head2, Head3, Head4, Rate, Dates, Select, Filter } from './liquidate.style';
import './liquidate.style.css';
import states from '../resources';

export default function ViewInvestment() {
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
                        <Head1><Rate>{state.InterestRate}</Rate> returns in 270 days</Head1>
                        <label id='labeld'>Matures on</label>
                        <Head2>{state.MaturityDate}</Head2>
                        <label id='labele'>Invested Capital</label>
                        <Head3>&#8358;{state.InvestedCapital}</Head3>
                        <label id='labelf'>Interest</label>
                        <Head4>&#8358;{state.Interest}</Head4>
                        <Dates>Liquidated on {state.Liquidate}</Dates>
                    </ViewInvestCard>
                })}


            </div>
        </div>
    )
}

