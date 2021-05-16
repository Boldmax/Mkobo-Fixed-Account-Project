import React, { useContext, useMemo, useState } from 'react';
import Nav from "./Nav";
import HorizontalNav from "./HorizontalNav1";
import Account from "./Account/Account";
import Settings from "./settings/Settings";
import Investment from "./Investment/investment"
import CardsAndBank from "./CardsAndBanks/CardsAndBank"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalState } from '../GlobalState';
import { useParams, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import './dashboard.css';



export default function Dashboard() {
 //   const { token, setToken } = useContext(GlobalState)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const getFromLS = () => {
        return  localStorage.getItem('JWT')
       }; 
       const token = getFromLS()

    //  const { token } = useParams();
    if (!token || token === undefined) {
        return <Redirect to='/loginform' />
    };
    return (
        <div>
            <Router>
                <HorizontalNav />
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "bi bi-x" : "bi bi-list"}></i>
                </div>
                <div className="dashboard">
                    <Nav click={click} />
                    <Switch>
                        <Route path="/dashboard/account" component={() => <Account />} />
                        <Route path="/dashboard/settings" component={Settings} />
                        <Route path="/dashboard/cardsandbanks" component={CardsAndBank} />
                        <Route path="/dashboard/Investment" component={Investment} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
