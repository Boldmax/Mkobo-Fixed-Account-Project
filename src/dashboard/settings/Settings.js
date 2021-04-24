import React from 'react';

import SettingNav from "./SettingsNav";
import SecurityQuestions from "./SecurityQuestions";
import PasswordSettings from "./PasswordSettings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Settings() {
    return (
        <div className="AccountCompo">
            <Router>
                < SettingNav />
                <Switch>
                    <Route path="/dashboard/setting/passwordsettings" component={PasswordSettings} />
                    <Route path="/dashboard/settings/securitysettings" component={SecurityQuestions} />
                </Switch>
            </Router>
        </div>
    )
}
