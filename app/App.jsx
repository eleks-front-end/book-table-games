import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';

import Routes from './components/Routes';
import store from './store';
import userManager from './utils/userManager.js';
// Application Styles
import './styles/bootstrap.scss';
import './styles/app.scss';

import { Log } from 'oidc-client';
Log.logger = console;

ReactDOM.render(
    <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <Routes/>
        </OidcProvider>
    </Provider>
    ,
    document.getElementById('app')
);
