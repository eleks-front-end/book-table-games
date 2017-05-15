import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Header from './Header';
import Offsidebar from './Offsidebar';
import Footer from './Footer';

import { Route, Switch } from 'react-router-dom';
import SingleView from '../SingleView/SingleView';

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
                        <Route path="/" component={SingleView}/>
                    </Switch>

                </CSSTransitionGroup>

                <Footer />
            </div>
        );
    }

}

export default Base;
