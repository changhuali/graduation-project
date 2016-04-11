import React from 'react';
import { Route, IndexRoute, Redirect, NotFoundRoute } from 'react-router';
import App from '../components/App';
import Login from '../components/user/Login';
import Regist from '../components/user/Regist';
import Index from '../components/index/Index';
import FaminyPro from '../components/familyPro/FamilyPro';

var routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='login' component={Login} />
        <Route path='regist' component={Regist} />
        <Route path='familyPro' component={FaminyPro} />
        <Redirect from='/*' to='/' />
    </Route>
)

export default routes;
