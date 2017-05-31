import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Col, Row, Well } from 'react-bootstrap';
import styles from './dashboard.style.scss';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';

class DashboardView extends React.Component {
    render () {
        return (
            <ContentWrapper>
                <Row>
                    <Col xs={12} className="text-center">
                        <h1 className="text-thin" styleName="styles.title">What do you prefer?</h1>
                        <Row>
                            <Col lg={6}>
                                <Well>
                                    <Link to="/tennis">
                                        <img src="img/tennis.svg" alt="Table tennis"
                                             title="Go to main page table tennis" styleName="game-image"/>
                                        <h2>Table tennis</h2>
                                    </Link>
                                </Well>
                            </Col>
                            <Col lg={6}>
                                <Well>
                                    <Link to="/billiard">
                                        <img src="img/billiard.svg" alt="Billiard" title="Go to main page billiard"
                                             styleName="game-image"/>
                                        <h2>Billiard</h2>
                                    </Link>
                                </Well>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default cssModules(DashboardView, styles);
