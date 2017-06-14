import { connect } from 'react-redux';
import React from 'react';
import { push } from 'react-router-redux';

class EnsureLoggedInContainer extends React.Component {
    componentDidUpdate () {
        const { dispatch, currentURL, isLoggedIn } = this.props;

        console.log(isLoggedIn);
        if (!isLoggedIn) {
            dispatch(push('/'));
            // dispatch(setRedirectUrl(currentURL));
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

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.user && !state.user.expired,
    currentURL: ownProps.location.pathname
});

export default connect(mapStateToProps)(EnsureLoggedInContainer);
