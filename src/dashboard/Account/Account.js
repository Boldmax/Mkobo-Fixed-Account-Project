import React, { useEffect, useContext } from 'react';
//import scrollIntoView from "react-scroll-into-view";
import MyProfile from "./InvestmentDetails";
import DownloadCertificate from "./DownloadCertificate";
import Nextofkin from "./Nextofkin";
import ActiveInvestments from "./ActiveInvestments";
import AccountNav from "./AccountNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalState } from '../../GlobalState';
import axios from 'axios';

export default function Account() {
    const { userId, setUserID } = useContext(GlobalState);

    const getFromLS = () => {
        return localStorage.getItem('JWT')
    };
    useEffect(() => {
        axios.get('http://localhost:4000/app/user/', {
            headers: {
                Authorization: `Bearer ${getFromLS()}`
            }
        })
            .then(resp => {
                // console.log(resp.data[0]._id)
                const user = resp.data[0]._id;
                setUserID(user);
            })
            .catch(err => console.log(err));
    })
    // const myRef = useRef();
    // const scrollClick = () => { myRef.current.scrollIntoView({behavior: 'smooth', block: 'start' }) }
    // function scrollClick() { myRef.current.scrollIntoView({behavior: 'smooth'}) }
    return (
        <div className="AccountCompo">
            <Router>
                < AccountNav />
                <Switch>
                    <Route path="/dashboard/account/myprofile" component={() => <MyProfile />} />
                    <Route path="/dashboard/account/Nextofkin" component={() => <Nextofkin />} />
                    <Route path="/dashboard/account/activeinvestment" component={ActiveInvestments} />
                    <Route path="/dashboard/activeaccount" component={DownloadCertificate} />
                </Switch>
            </Router>
        </div>
    )
}
