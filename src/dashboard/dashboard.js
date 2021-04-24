//import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import HorizontalNav from "./HorizontalNav1";
import Account from "./Account/Account";
import Settings from "./settings/Settings";
import CardsAndBank from "./CardsAndBanks/CardsAndBank"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function Dashboard({ token }) {

    /*  if (!token || (token.lenght < 1)) {
         return <Redirect to='/loginform' />
     }; */
    return (
        <div>
            <Router>
                <HorizontalNav />
                <div className="dashboard">
                    <Nav />
                    <Switch>
                        <Route path="/dashboard/account" component={Account} />
                        <Route path="/dashboard/settings" component={Settings} />
                        <Route path="/dashboard/cardsandbanks" component={CardsAndBank} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
