import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './Auth/LoginPage';
import MainPage from './Dashboard/Dashboard';

const HomePage = props => {
    const { user } = props;
    return !user || user.expired ? <LoginPage/> : <MainPage />;
};
HomePage.propTypes = {
    user: React.PropTypes.object
};
const mapStateToProps = state => ({
    user: state.oidc.user
});
const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
