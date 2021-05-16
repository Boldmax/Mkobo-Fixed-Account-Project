import LandingPage from "./LandingPage/LandingPage";
import SignUpForm from "./Forms/SignUpForm";
import SignInForm from "./Forms/SignInForm";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useMemo } from 'react'
import './App.css';
import EmailConfirm from "./Forms/EmailConfirm";
import WrongPassword from "./Forms/WrongPassword";
import PasswordReset from "./Forms/PasswordReset";
import { GlobalState } from "./GlobalState";

function App() {

  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null)
  const value = useMemo(() => ({ token, setToken }), [token, setToken]);

  const closePageHandler = () => setShow(false)
  return (
    <Router>
      <div className="App">
        <Switch>
          <GlobalState.Provider value={value}>
            <Route path="/" exact component={LandingPage} />
            <Route path="/loginform" component={() => <SignInForm />} />
            <Route path="/signupform" component={SignUpForm} />
            <Route path="/dashboard" component={() => <Dashboard />} />
            <Route path="/confirmemail" component={() => <EmailConfirm show={show} close={closePageHandler} />} />
            <Route path="/wrongpassword" component={() => <WrongPassword />} />
            <Route path="/passwordReset" component={PasswordReset} />
          </GlobalState.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
