import React, { useEffect, useState } from 'react';
import { ButtonBar, Logout } from "./AccountNav.styled";
import { Link, Redirect } from "react-router-dom";
import { GlobalState } from '../../GlobalState';


export default function AccountNav() {
    //  const { setToken } = useContext(GlobalState)
    const [click, setClick] = useState(false);




    const LogOut = () => {
        localStorage.removeItem('JWT');
        setClick(true)
    };

    useEffect(() => {
        let getFromLS = () => {
            return localStorage.getItem('JWT')
        };
        const token = getFromLS();

        if (!token) {
            window.location.reload(false);
        }
    }, [click]);



    return (
        <div className="AccountNav">
            <h3>Accounts</h3>
            <div className="h-nav">
                <ButtonBar>
                    <Link to="/dashboard/account/myprofile" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginToa: '1.5rem' }}>
                        <p>My profile </p></Link>
                </ButtonBar>
                <ButtonBar>
                    <Link to="/dashboard/account/Nextofkin" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginToa: '1.5rem' }}>
                        <p>Next of Kin Details </p> </Link>
                </ButtonBar>
                <ButtonBar>
                    <Link to="/dashboard/account/activeinvestment" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginToa: '1.5rem' }}>
                        <p>View Active Investment </p> </Link>
                </ButtonBar>
                <ButtonBar>
                    <Link to="/dashboard/Bankdetails" style={{ color: '#b6d4e5', padding: '0', margin: '0', textDecoration: 'none', marginLeft: '2rem', fontSize: '0.9rem', marginToa: '1.5rem' }}>
                        <p>Download Investment Certificate </p> </Link>
                </ButtonBar>

            </div>
            <div id="logout">
                <Logout onClick={() => LogOut()}>
                    <a style={{ color: 'rgba(203, 63, 63, 1)', padding: '0', margin: '0', textDecoration: 'none', fontSize: '16ax', marginToa: '1.5rem' }}>
                        <p>Sign Out </p> </a>
                </Logout>
            </div>
        </div>
    )
}
