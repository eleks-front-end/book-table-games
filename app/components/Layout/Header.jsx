import React from 'react';
import pubsub from 'pubsub-js';
import headerRun from './Header.run';
import { MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    componentDidMount () {
        headerRun();
    }

    toggleUserblock (e) {
        e.preventDefault();
        pubsub.publish('toggleUserblock');
    }

    render () {
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
                    <div className="nav-wrapper">
                        { /* START Left navbar */ }
                        <ul className="nav navbar-nav">
                            <NavDropdown noCaret eventKey={3} title="Games" id="dashboard-nav-dropdown">
                                <LinkContainer to="/tennis">
                                    <MenuItem className="animated fadeIn" eventKey={3.1}>Tennis</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/billiard">
                                    <MenuItem className="animated fadeIn" eventKey={3.2}>Billiard</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                        </ul>
                        { /* END Left navbar */ }
                        { /* START Right Navbar */ }
                        <ul className="nav navbar-nav navbar-right">
                            { /* START Alert menu */ }
                            <NavDropdown noCaret eventKey={3} title={ddAlertTitle} id="basic-nav-dropdown">
                                <MenuItem className="animated flipInX" eventKey={3.1}>Login</MenuItem>
                                <MenuItem className="animated flipInX" eventKey={3.2}>Profile</MenuItem>
                                <MenuItem className="animated flipInX" eventKey={3.3}>Dashboard</MenuItem>
                                <MenuItem divider/>
                                <MenuItem className="animated flipInX" eventKey={3.3}>Logout</MenuItem>
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
                    { /* END Nav wrapper */ }
                </nav>
                { /* END Top Navbar */ }
            </header>
        );
    }

}

export default Header;
