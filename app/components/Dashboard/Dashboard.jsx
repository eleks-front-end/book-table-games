import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Col, Row, Well } from 'react-bootstrap';
import styles from './dashboard.style.scss';
import cssModules from 'react-css-modules';

class DashboardView extends React.Component {

    render () {
        return (
            <ContentWrapper>
                {/*<div className="content-heading">*/}
                    {/*Select game*/}
                {/*</div>*/}
                <Row>
                    <Col xs={12} className="text-center">
                        <h1 styleName="styles.title">What do you prefer?</h1>
                        <Row>
                            <Col lg={6}>
                                <Well>
                                    <a href="/tennis">
                                        <img src="img/tennis.svg" alt="Table tennis" title="Go to main page table tennis"/>
                                        <h2>Table tennis</h2>
                                    </a>
                                </Well>
                            </Col>
                            <Col lg={6}>
                                <Well>
                                    <a href="/billiard">
                                        <img src="img/billiard.svg" alt="Billiard" title="Go to main page billiard"/>
                                        <h2>Billiard</h2>
                                    </a>
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
