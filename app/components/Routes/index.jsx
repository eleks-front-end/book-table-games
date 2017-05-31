import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Tennis from '../Tennis/Tennis';
import ReserveTennis from '../ReserveTennis/ReserveTennis';
import Billiard from '../Billiard/Billard';
import HomePage from '../HomePage';
import CallbackPage from '../Auth/CallbackPage';
import Profile from '../Profile/Profile';
import Root from '../Layout/Root';

import store from '../../store';

const history = syncHistoryWithStore(browserHistory, store);

class Routes extends React.Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/" component={Root}>
                    <IndexRoute component={HomePage}/>
                    <Route path="callback" component={CallbackPage}/>
                    <Route path="tennis" component={Tennis}/>
                    <Route path="tennis/reserve" component={ReserveTennis}/>
                    <Route path="billiard" component={Billiard}/>
                    <Route path="profile" component={Profile}/>
                </Route>
            </Router>
        );
    }
}

export default Routes;
