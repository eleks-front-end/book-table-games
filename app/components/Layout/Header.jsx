import React from 'react';
import pubsub from 'pubsub-js';
import { MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import initStateToggler from '../Common/toggle-state';
import userManager from '../../utils/userManager';

class Header extends React.Component {

    componentDidMount () {
        initStateToggler();
    }

    toggleUserblock (e) {
        e.preventDefault();
        pubsub.publish('toggleUserblock');
    }

    onLogoutButtonClicked (event) {
        event.preventDefault();
        userManager.signoutRedirect(); // removes the user data from sessionStorage
    }

    render () {
        const { user } = this.props;

        const ddAlertTitle = (<span>
                <em className="icon-bell"/>
                <span className="label label-danger">11</span>
            </span>);


        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */ }
                <nav role="navigation" className="navbar topnavbar">
                    { /* START navbar header */ }
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <div className="brand-logo">
                                <img src="img/logo.svg" alt="App Logo" className="img-responsive"/>
                            </div>
                        </Link>
                    </div>
                    { /* END navbar header */ }
                    { /* START Nav wrapper */ }
                    {user && <div className="nav-wrapper">
                        { /* START Left navbar */ }
                        <ul className="nav navbar-nav">
                            <NavDropdown noCaret eventKey={3} title="Games" id="dashboard-nav-dropdown">
                                <MenuItem className="animated fadeIn" eventKey={3.1} componentClass={Link} to="/tennis"
                                          href="/tennis">Tennis</MenuItem>
                                <MenuItem className="animated fadeIn" eventKey={3.2} componentClass={Link}
                                          to="/billiard" href="/billiard">Billiard</MenuItem>
                            </NavDropdown>
                        </ul>
                        { /* END Left navbar */ }
                        { /* START Right Navbar */ }
                        <div className="user-toolbar">
                            <div className="user-welcome">
                                {`Hi ${user.profile.allNames}`}
                            </div>
                            <ul className="nav navbar-nav">
                                { /* START Alert menu */ }
                                <NavDropdown noCaret eventKey={3} title={ddAlertTitle} id="basic-nav-dropdown">
                                    <MenuItem className="animated flipInX" eventKey={3.2} componentClass={Link}
                                              to="/profile" href="/profile">Profile</MenuItem>
                                    <MenuItem className="animated flipInX" eventKey={3.3}
                                              onClick={this.onLogoutButtonClicked}>Logout</MenuItem>
                                </NavDropdown>
                                { /* END Alert menu */ }
                                { /* START Offsidebar button */ }
                                <li>
                                    <a href="#" data-toggle-state="offsidebar-open" data-no-persist="false">
                                        <em className="icon-notebook"/>
                                    </a>
                                </li>
                                { /* END Offsidebar menu */ }
                            </ul>
                            { /* END Right Navbar */ }
                        </div>
                    </div>}
                    { /* END Nav wrapper */ }
                </nav>
                { /* END Top Navbar */ }
            </header>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.oidc.user,
        history: state.routing
    };
}
const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
