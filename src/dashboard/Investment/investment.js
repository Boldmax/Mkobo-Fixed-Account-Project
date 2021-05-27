import React, { useState } from 'react';
import { InvestCard, Total, Amount, Header, Links } from "./investment.style";
import ViewInvestment from './Investment_Views/viewInvestment/ViewInvestment';
import WithdrawInvestment from './Investment_Views/WithdrawInvestment/WithdrawInvestment';
import Invest from './Investment_Views/Invest/Invest';
import Liquidate from './Investment_Views/Liquidate/Liquidate';
import History from './investmentHistory/InvestmentHistory';
import InvestForm from './Investment_Views/Invest/InvestForm';
import Withdraw from './Investment_Views/viewInvestment/withdrawForm';
import LiquidateForm from './Investment_Views/viewInvestment/LiquidateForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './investment.css';

const invest = {
    total: 'Total Investment Portfolio in Naira',
    amount: '30,000,000.00'
}

function Investment() {
    const [click, setClick] = useState(false);
    const [hide, setHide] = useState(false);
    const [change, setChange] = useState(false);

    const handleClick = () => setClick(!click);
    const handleHide = () => setHide(!hide);
    const handleChange = () => setChange(!change);
    return (
        <div className='investClass'>
            <Router>
                <InvestForm show={click} close={handleClick} />
                <Withdraw hide={hide} close={handleHide} />
                <LiquidateForm change={change} close={handleChange}/>
                <div className='header'>
                    <Header>Investments</Header>
                    <InvestCard>
                        <Total>{invest.total}</Total>
                        <Amount>&#8358;{invest.amount} </Amount>
                    </InvestCard>
                </div>
                <hr id='divider' />
                <div className='invest-nav'>
                    <Links to='/dashboard/Investment/viewInvestment' style={{ textDecoration: 'none', marginBottom: '0' }}>
                        Investments  </Links>
                    <Links to='/dashboard/Investment/invest' style={{ textDecoration: 'none', marginBottom: '0' }}>
                        Invest </Links>
                    <Links to='/dashboard/Investment/liquidate' style={{ textDecoration: 'none', marginBottom: '0' }}>
                        Liquidate </Links>
                    <Links to='/dashboard/Investment/withdrawInvestment' style={{ textDecoration: 'none', marginBottom: '0' }} >
                        Withdraw </Links >
                </div >
                <hr id='divider2' />
                <div className='routesBody'>
                    <Switch>
                        <Route path='/dashboard/Investment/viewInvestment' exact component={() => <ViewInvestment close={handleHide} handle={handleChange} />} />
                        <Route path='/dashboard/Investment/withdrawInvestment' component={() => <WithdrawInvestment  />} />
                        <Route path='/dashboard/Investment/invest' component={() => <Invest close={handleClick} />} />
                        <Route path='/dashboard/Investment/liquidate' component={Liquidate} />
                    </Switch>
                </div>
                <History />
            </Router >
        </div >
    )
}

export default Investment
