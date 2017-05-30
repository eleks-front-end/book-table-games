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
                <h3>Welcome to the react-spa redux sample app!</h3>
                <p>Please log in to continue</p>
                <button onClick={this.handleLoginButtonClick}>Login with WSO2</button>
            </div>
        );
    }
}