import LandingPage from "./LandingPage/LandingPage";
import SignUpForm from "./Forms/SignUpForm";
import SignInForm from "./Forms/SignInForm";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react'
import './App.css';
import EmailConfirm from "./Forms/EmailConfirm";
import WrongPassword from "./Forms/WrongPassword";
import PasswordReset from "./Forms/PasswordReset";

function App() {

  const [show, setShow] = useState(false);

  const closePageHandler = () => setShow(false)
  return (
    <Router>
      <div className="App">
      <button onClick={() => setShow(true)} style={{width: "10rem", height: "4.5rem", backgroundColor: "green", margin:" 6rem", fontSize: "1rem", position: "fixed"}}>Open</button>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/loginform" component={SignInForm} />
          <Route path="/signupform" component={SignUpForm} />
          <Route path="/dashboard" component={() => <Dashboard />} />
          <Route path="/confirmemail" component={() =>  <EmailConfirm show={show} close={closePageHandler} />} />
          <Route path="/wrongpassword" component={() => <WrongPassword />} />
          <Route path="/passwordReset" component={PasswordReset} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
