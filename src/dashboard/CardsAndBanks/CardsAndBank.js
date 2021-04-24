import React from 'react';
import Cards from './Cards';
import Account from './Accounts';
import CardsAndBanksNav from './CardAndBanksNav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function CardsAndBank() {
    return (
        <div className="CardsAnsBanksContainer">
            <Router>
                < CardsAndBanksNav />
                <Switch>
                    <Route path="/dashboard/cardsandbanks/cards" component={Cards} />
                    <Route path="/dashboard/cardsandbanks/account" component={Account} />
                </Switch>
            </Router>
        </div>
    )
}
