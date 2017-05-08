import React from 'react';
import pubsub from 'pubsub-js';
import headerRun from './Header.run';
import { MenuItem, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
                        <a href="#/" className="navbar-brand">
                            <div className="brand-logo">
                                <img src="img/logo.png" alt="App Logo" className="img-responsive"/>
                            </div>
                            <div className="brand-logo-collapsed">
                                <img src="img/logo-single.png" alt="App Logo" className="img-responsive"/>
                            </div>
                        </a>
                    </div>
                    { /* END navbar header */ }
                    { /* START Nav wrapper */ }
                    <div className="navbar-collapse collapse">
                        { /* START Left navbar */ }
                        <ul className="nav navbar-nav">
                            <NavDropdown noCaret eventKey={3} title="Dashboard" id="dashboard-nav-dropdown">
                                <LinkContainer to="dashboardv1h">
                                    <MenuItem className="animated fadeIn" eventKey={3.1}>Dashboard v1</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="dashboardv2h">
                                    <MenuItem className="animated fadeIn" eventKey={3.2}>Dashboard v2</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="dashboardv3h">
                                    <MenuItem className="animated fadeIn" eventKey={3.3}>Dashboard v3</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="widgetsh"><NavItem>Widgets</NavItem></LinkContainer>
                            <LinkContainer to="dashboard"><NavItem>Back</NavItem></LinkContainer>
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
