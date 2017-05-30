import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import history from 'history';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';

import Base from './components/Layout/Base';
import store from './store';
import userManager from './utils/userManager.js';
// Application Styles
import './styles/bootstrap.scss';
import './styles/app.scss';

ReactDOM.render(
    <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <Router history={history}>
                <Base/>
            </Router>
        </OidcProvider>
    </Provider>,
    document.getElementById('app')
);
