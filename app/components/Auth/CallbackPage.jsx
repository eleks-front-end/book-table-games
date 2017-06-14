import React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import { push } from 'react-router-redux';
import userManager from 'utils/userManager.js';

class CallbackPage extends React.Component {
    handleCallbackSuccess () {
        this.props.dispatch(push('/'));
    };

    handleCallbackError (error) {
        this.props.dispatch(push('/'));
    };

    render () {
        const { ...props } = this.props;
        // just redirect to '/' in both cases
        return (
            <CallbackComponent {...props} userManager={userManager}
                               successCallback={this.handleCallbackSuccess.bind(this)}
                               errorCallback={this.handleCallbackError.bind(this)}>
                <div>
                    Redirecting...
                </div>
            </CallbackComponent>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(CallbackPage);
