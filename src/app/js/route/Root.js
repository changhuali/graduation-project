import React from 'react';
import { Route, IndexRoute, Redirect, NotFoundRoute } from 'react-router';
import App         from '../components/App';
import Login       from '../components/user/Login';
import Regist      from '../components/user/Regist';
import Index       from '../components/index/Index';
import FaminyPro   from '../components/familyPro/FamilyPro';
import FaminyCase  from '../components/familyCase/FamilyCase';
import OnlineDemo  from '../components/onlineDemo/OnlineDemo';
import Budget      from '../components/budget/Budget';
import Imformation from '../components/imformation/Imformation';
import Promotion   from '../components/promotion/Promotion';
import About       from '../components/about/About';
import Contact     from '../components/contact/Contact';

var routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='login' component={Login} />
        <Route path='regist' component={Regist} />
        <Route path='familyPro' component={FaminyPro} />
        <Route path='familyCase' component={FaminyCase} />
        <Route path='onlineDemo' component={OnlineDemo} />
        <Route path='budget' component={Budget} />
        <Route path='imformation' component={Imformation} />
        <Route path='promotion' component={Promotion} />
        <Route path='about' component={About} />
        <Route path='contact' component={Contact} />
        <Redirect from='/*' to='/' />
    </Route>
)

export default routes;
