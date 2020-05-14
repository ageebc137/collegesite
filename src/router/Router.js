import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../components/Home';

function RouterComponent() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default RouterComponent;