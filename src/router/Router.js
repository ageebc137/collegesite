import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function RouterComponent() {
    return (
        <Router>
            <Switch>
                <Route path="/"></Route>
            </Switch>
        </Router>
    )
}

export default RouterComponent;