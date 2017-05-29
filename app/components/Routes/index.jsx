import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Tennis from '../Tennis/Tennis';
import ReserveTennis from '../ReserveTennis/ReserveTennis';
import Billiard from '../Billiard/Billard';

class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/tennis" component={Tennis}/>
                <Route path="/tennis/reserve" component={ReserveTennis}/>
                <Route path="/billiard" component={Billiard}/>
            </Switch>
        );
    }
}

export default Routes;