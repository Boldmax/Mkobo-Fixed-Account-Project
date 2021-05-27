import React from 'react';
import { ViewInvestCard, Title, Head1, Head2, Head3, Head4, Rate, BackButton, Select, Filter } from './investStyleItems.style';
import './viewInvestment.css';
import states from '../resources';

export default function ViewInvestment({ close, handle }) {
    /* const handleClick = () => {

        states.options.map(item => {
            const Liquidate = item.liquidate_ref
            const withdraw = item.liquidate_ref
            if (Liquidate === true) {
                return close()
            };
            if (withdraw === false) {
                console.log('withdraw is clicked')
            }
        })
    } */

    return (
        <div className='container'>
            <div className='filter'>
                <Filter><i className='bi bi-funnel' />Filter by</Filter>
                <Select>
                    <option>Tenure</option>
                    <option>Rate</option>
                </Select>
            </div>
            <div>
                {states.options.map((state, key) => {
                    return <div className='CardHold'>
                        <ViewInvestCard key={key}>
                            <Title>{state.Name}</Title>
                            <Head1><Rate>{state.InterestRate}</Rate> returns in 270 days</Head1>
                            <label id='label41'>Value on maturity</label>
                            <Head2>&#8358; {state.Interest}</Head2>
                            <label id='label51'>Invested Capital</label>
                            <Head3>&#8358;{state.InvestedCapital}</Head3>
                            <label id='label61'>Matures on</label>
                            <Head4>{state.MaturityDate}</Head4>
                            <BackButton onClick={close}>Withdraw</BackButton>
                        </ViewInvestCard>

                        <ViewInvestCard key={key}>
                            <Title>{state.Name}</Title>
                            <Head1><Rate>{state.InterestRate}</Rate> returns in 270 days</Head1>
                            <label id='label41'>Value on maturity</label>
                            <Head2>&#8358; {state.Interest}</Head2>
                            <label id='label51'>Invested Capital</label>
                            <Head3>&#8358;{state.InvestedCapital}</Head3>
                            <label id='label61'>Matures on</label>
                            <Head4>{state.MaturityDate}</Head4>
                            <BackButton onClick={handle} liquidate>Liquidate</BackButton>
                        </ViewInvestCard>
                    </div>
                })}
            </div>
        </div>
    )
}
