import React, { useState } from 'react';
import Nav from "./Nav";
import HorizontalNav from "./HorizontalNav1";
import Account from "./Account/Account";
import Settings from "./settings/Settings";
import Investment from "./Investment/investment";
import CardsAndBank from "./CardsAndBanks/CardsAndBank";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { GlobalState } from '../GlobalState';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import './dashboard.css';



export default function Dashboard() {
    //   const { token, setToken } = useContext(GlobalState)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const getFromLS = () => {
        return localStorage.getItem('JWT')
    };
    const token = getFromLS()

    //  const { token } = useParams();
    if (!token || token === undefined) {
        return <Redirect to='/loginform' />
    };
    return (
        <div>
            <Router>
                <HorizontalNav click={click} />
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "bi bi-x" : "bi bi-list"}></i>
                </div>
                <div className="dashboard">
                    <Nav click={click} close={handleClick} />
                    <Switch>
                        <Route path="/dashboard/account" component={() => <Account click={click} />} />
                        <Route path="/dashboard/settings" component={() => <Settings click={click} />} />
                        <Route path="/dashboard/cardsandbanks" component={() => <CardsAndBank click={click} />} />
                        <Route path="/dashboard/Investment" component={() => <Investment click={click} />} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
