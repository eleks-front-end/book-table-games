import React from 'react';
import userManager from '../../utils/userManager';

export default class LoginPage extends React.Component {
    handleLoginButtonClick (event) {
        event.preventDefault();
        userManager.signinRedirect();
    };

    render () {
        const { ...props } = this.props;
        return (
            <div {...props}>
                <h1>Please log in to continue</h1>
                <button onClick={this.handleLoginButtonClick}>Login with WSO2</button>
            </div>
        );
    }
}