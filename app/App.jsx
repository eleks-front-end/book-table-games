import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import Base from './components/Layout/Base';

import SingleView from './components/SingleView/SingleView';
// Application Styles
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './styles/app.scss';

// specify basename below if running in a subdirectory or set as "/" if app runs in root
const appHistory = useRouterHistory(createHistory)({
    basename: WP_BASE_HREF
});

ReactDOM.render(
    <Router history={appHistory}>
        <Route path="/" component={Base}>

            {/* Default route*/}
            <IndexRoute component={SingleView}/>

            <Route path="singleview" component={SingleView}/>

        </Route>

        {/* Not found handler */}
        {/* <Route path="*" component={NotFound}/>*/}

    </Router>,
    document.getElementById('app')
);
