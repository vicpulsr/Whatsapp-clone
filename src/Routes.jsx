import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Conversation from './pages/Conversation/Conversation';

function Routes() {
    return (
        <BrowserRouter basename="/Whatsapp-clone">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/conversation/:index" render={routeProps => (
                    <Conversation {...routeProps} />
                )}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;