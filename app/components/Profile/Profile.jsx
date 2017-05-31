import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Col, Row } from 'react-bootstrap';
import styles from './profile.style.scss';
import cssModules from 'react-css-modules';

class TennisView extends React.Component {
    componentDidMount () {
    }

    render () {
        return (
            <ContentWrapper>
                <Row>
                    <Col xs={12}>
                        <div>
                            <h1 className="text-thin">My Profile</h1>
                        </div>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default cssModules(TennisView, styles);
