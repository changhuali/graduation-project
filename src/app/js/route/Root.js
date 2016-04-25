import React from 'react';
import { Route, IndexRoute, Redirect, NotFoundRoute } from 'react-router';
import App         from '../components/App';
import Setting     from '../components/user/User/Setting';
import User        from '../components/user/User';
import Index       from '../components/index/Index';
import FaminyPro   from '../components/familyPro/FamilyPro';
import FaminyCase  from '../components/familyCase/FamilyCase';
import CaseDetail  from '../components/familyCase/FamilyCase/CaseDetail';
import OnlineDemo  from '../components/onlineDemo/OnlineDemo';
import Budget      from '../components/budget/Budget';
import Imformation from '../components/imformation/Imformation';
import ImforDetail from '../components/imformation/Imformation/ImfoDetail';
import Promotion   from '../components/promotion/Promotion';
import PmDetail    from '../components/promotion/Promotion/PmDetail';
import About       from '../components/about/About';
import Contact     from '../components/contact/Contact';

var routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='user' component={Setting} />
        <Route path='login' component={User} />
        <Route path='regist' component={User} />
        <Route path='familyPro' component={FaminyPro} />
        <Route path='familyCase' component={FaminyCase} />
        <Route path='familyCase/:id' component={CaseDetail} />
        <Route path='onlineDemo' component={OnlineDemo} />
        <Route path='onlineDemo/:id' component={OnlineDemo} />
        <Route path='budget' component={Budget} />
        <Route path='imformation' component={Imformation} />
        <Route path='imformation/:id' component={ImforDetail} />
        <Route path='promotion' component={Promotion} />
        <Route path='promotion/:id' component={PmDetail} />
        <Route path='about' component={About} />
        <Route path='contact' component={Contact} />
        <Redirect from='/*' to='/' />
    </Route>
)

export default routes;
