import { connect } from 'react-redux';
import React from 'react';
import { push } from 'react-router-redux';

class EnsureLoggedInContainer extends React.Component {
    componentDidUpdate () {
        const { dispatch, isLoggedIn, oidc } = this.props;

        if (!oidc.isLoadingUser && !isLoggedIn) {
            dispatch(push('/'));
        }
    }

    render () {
        const { isLoggedIn, children } = this.props;

        if (isLoggedIn) {
            return children;
        }
        return null;
    }
}

const mapStateToProps = state => ({
    oidc: state.oidc,
    isLoggedIn: state.oidc.user && !state.oidc.user.expired
});

export default connect(mapStateToProps)(EnsureLoggedInContainer);
