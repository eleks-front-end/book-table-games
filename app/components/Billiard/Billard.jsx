import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Col, Row } from 'react-bootstrap';

class TennisView extends React.Component {

    render () {
        return (
            <ContentWrapper>
                <Row>
                    <Col xs={12}>
                        <h1 className="text-thin">Billiard</h1>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default TennisView;
