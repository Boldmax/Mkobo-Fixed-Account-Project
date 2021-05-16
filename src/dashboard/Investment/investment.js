import React from 'react';
import { InvestCard, Total, Amount, Header } from "./investment.style";
import ViewInvestment from './Investment_Views/viewInvestment/ViewInvestment';
import WithdrawInvestment from './Investment_Views/WithdrawInvestment/WithdrawInvestment';
import Invest from './Investment_Views/Invest/Invest';
import Liquidate from './Investment_Views/Liquidate/Liquidate';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './investment.css';

const invest = {
    total: 'Total Investment Portfolio in Naira',
    amount: '#30,000,000.00'
}

function Investment() {
    return (
        <div className='investClass'>
            <Router>
                <div className='header'>
                    <Header>Investments</Header>
                    <InvestCard>
                        <Total>{invest.total}</Total>
                        <Amount>{invest.amount} </Amount>
                    </InvestCard>
                </div>
                <hr id='divider' />
                <div className='invest-nav'>
                    <Link className='linkstyle' to='/dashboard/invest/viewInvestment' style={{ textDecoration: 'none', marginBottom: '-1.1rem', width: '10rem' }}>
                        <span>View Investment </span> </Link>
                    <Link className='linkstyle' to='/dashboard/invest/invest' style={{ textDecoration: 'none', marginBottom: '-1.1rem', width: '10rem' }}>
                        <span>Invest</span> </Link>
                    <Link className='linkstyle' to='/dashboard/invest/withdrawInvestment' style={{ textDecoration: 'none', marginBottom: '-1.1rem', width: '10rem' }} >
                        <span>Withdraw Investment</span> </Link>
                    <Link className='linkstyle' to='/dashboard/invest/liquidate' style={{ textDecoration: 'none', marginBottom: '-1.1rem', width: '10rem' }}>
                        <span>Liquidate</span> </Link>
                </div>
                <hr id='divider2' />
                <Switch>
                    <Route path='/dashboard/invest/viewInvestment' exact component={ViewInvestment} />
                    <Route path='/dashboard/invest/withdrawInvestment' component={WithdrawInvestment} />
                    <Route path='/dashboard/invest/invest' component={Invest} />
                    <Route path='/dashboard/invest/liquidate' component={Liquidate} />
                </Switch>
            </Router>
        </div>
    )
}

export default Investment
