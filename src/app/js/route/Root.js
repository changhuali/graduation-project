import React from 'react';
import { Route, IndexRoute, Redirect, NotFoundRoute } from 'react-router';
import App from '../components/App';
import Index from '../components/index/Index';
var routes = (
    <Route path="/" component={App}>
        <Route path="index" component={Index} />
    </Route>
)

export default routes;
