import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Header from './Header';
import Offsidebar from './Offsidebar';
import Footer from './Footer';

import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Tennis from '../Tennis/Tennis';
import Billiard from '../Billiard/Billard';

class Base extends React.Component {

    componentWillMount () {
        $('body').addClass('layout-h');
    }

    componentWillUnmount () {
        // Only necessary for demo to restore classic layout
        $('body').removeClass('layout-h');
    }

    render () {
        // Animations supported
        //      'rag-fadeIn'
        //      'rag-fadeInUp'
        //      'rag-fadeInDown'
        //      'rag-fadeInRight'
        //      'rag-fadeInLeft'
        //      'rag-fadeInUpBig'
        //      'rag-fadeInDownBig'
        //      'rag-fadeInRightBig'
        //      'rag-fadeInLeftBig'
        //      'rag-zoomBackDown'

        const animationName = 'rag-fadeIn';

        return (
            <div className="wrapper">
                <Header />

                <Offsidebar />

                <CSSTransitionGroup
                    component="section"
                    transitionName={animationName}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/tennis" component={Tennis}/>
                        <Route path="/tennis/reserve" component={Tennis}/>
                        <Route path="/billiard" component={Billiard}/>
                    </Switch>

                </CSSTransitionGroup>

                <Footer />
            </div>
        );
    }

}

export default Base;
