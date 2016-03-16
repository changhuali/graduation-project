import React from 'react';
import { Route, IndexRoute, Redirect, NotFoundRoute } from 'react-router';
import App from '../components/App';

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
    </Route>
)

export default routes;
