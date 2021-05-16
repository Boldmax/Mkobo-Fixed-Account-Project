import React, { useRef } from 'react';
//import scrollIntoView from "react-scroll-into-view";
import MyProfile from "./InvestmentDetails";
import DownloadCertificate from "./DownloadCertificate";
import Nextofkin from "./Nextofkin";
import ActiveInvestments from "./ActiveInvestments";
import AccountNav from "./AccountNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Account() {
   // const myRef = useRef();
    //const scrollClick = () => { myRef.current.scrollIntoView({behavior: 'smooth', block: 'start' }) }
   // function scrollClick() { myRef.current.scrollIntoView({behavior: 'smooth'}) }
    return (
        <div className="AccountCompo">
            <Router>
                < AccountNav />
                <Switch>
                    <Route path="/dashboard/account/myprofile" component={() => <MyProfile  />} />
                    <Route path="/dashboard/account/Nextofkin" component={() => <Nextofkin />} />
                    <Route path="/dashboard/account/activeinvestment" component={ActiveInvestments} />
                    <Route path="/dashboard/activeaccount" component={DownloadCertificate} />
                </Switch>
            </Router>
        </div>
    )
}
