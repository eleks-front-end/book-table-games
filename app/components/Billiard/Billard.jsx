import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Col, Row, Well } from 'react-bootstrap';

class TennisView extends React.Component {

    render () {
        return (
            <ContentWrapper>
                <Row>
                    <Col xs={12} className="text-center">
                        <h1 className="text-thin">What do you prefer?</h1>
                        <Row>
                            <Col lg={6}>
                                <Well>
                                    <a href="/billiard">
                                        <h2>Billiard</h2>
                                        <img src="img/billiard.svg" alt="Billiard" title="Go to main page billiard"/>
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

export default TennisView;
