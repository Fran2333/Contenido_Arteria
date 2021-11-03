import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { Calendar } from '../components/calendar';
import { Sidebar } from '../components/nav/sidebar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Sidebar } />
                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
