import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import history from 'history';

import Base from './components/Layout/Base';
// Application Styles
import './styles/bootstrap.scss';
import './styles/app.scss';

ReactDOM.render(
    <Router history={history}>
        <Base/>
    </Router>,
    document.getElementById('app')
);
