import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Button, Col, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';
import styles from './tennis.style.scss';
import cssModules from 'react-css-modules';
import TimePicker from 'rc-time-picker';
import { Link } from 'react-router-dom';

class TennisView extends React.Component {
    componentDidMount () {
        const { participantsSelect } = this;

        if ($.fn.select2) {
            $(participantsSelect).select2({
                theme: 'bootstrap'
            });
        }
    }

    render () {
        const tooltipDelete = (
            <Tooltip id="tooltip">Cancel game</Tooltip>
        );
        const tooltipDeleteMe = (
            <Tooltip id="tooltip">Cancel me from game</Tooltip>
        );

        return (
            <ContentWrapper>
                <Row>
                    <Col xs={12}>
                        <div styleName="styles.wrapperTitleReserve">
                            <h1 className="text-thin" styleName="title">Table tennis</h1>
                            <Link to="/tennis/reserve">
                                <Button bsStyle="primary" styleName="reserveButton">Reserve</Button>
                            </Link>
                        </div>
                        <div styleName="filter" className="row">
                            <div className="col-sm-2">
                                <Button>Only my games</Button>
                            </div>
                            <div className="form-group col-sm-3" styleName="formGroup">
                                { /*  SELECT2 */ }
                                <select ref={input => this.participantsSelect = input} className="form-control" data-placeholder="Search by user">
                                    <option></option>
                                    <option value="1">Participant 1</option>
                                    <option value="2">Participant 2</option>
                                    <option value="3">Participant 3</option>
                                    <option value="4">Participant 4</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-3" styleName="formGroup">
                                <TimePicker
                                    showSecond={false}
                                    className="xxx"
                                    placeholder="From"
                                    // onChange={onChange}
                                    // format={format}
                                    use12Hours
                                />
                            </div>
                            <div className="form-group col-sm-3" styleName="formGroup">
                                <TimePicker
                                    showSecond={false}
                                    className="xxx"
                                    placeholder="To"
                                    // onChange={onChange}
                                    // format={format}
                                    use12Hours
                                />
                            </div>
                        </div>
                        <h3>Reserved games</h3>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th width="100">Time</th>
                                <th>Participants</th>
                                <th width="30"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>8:00-9:00</td>
                                <td colSpan="2">
                                    <a href="">Participant 3</a>,&nbsp;
                                    <a href="">Participant 4</a>
                                </td>
                            </tr>
                            <tr>
                                <td>9:00-10:00</td>
                                <td>
                                    <a href="">Participant 1</a>,&nbsp;
                                    <a href="">Participant 2</a>,&nbsp;
                                    <a href=""><b>Me</b></a>
                                </td>
                                <td>
                                    <OverlayTrigger placement="top" overlay={tooltipDeleteMe}>
                                        <Button bsStyle="danger" className="p-sm">
                                            <em className="icon-trash"/>
                                        </Button>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                            <tr>
                                <td>9:00-10:00</td>
                                <td>
                                    <a href="">Participant 1</a>,&nbsp;
                                    <a href=""><b>Me</b></a>
                                </td>
                                <td>
                                    <OverlayTrigger placement="top" overlay={tooltipDelete}>
                                        <Button bsStyle="danger" className="p-sm">
                                            <em className="icon-trash"/>
                                        </Button>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <div styleName="frameAdditionalLinks">
                            <a href="#">
                                <Button bsStyle="success">Show history</Button>
                            </a>
                            <a href="#">
                                <Button bsStyle="success">Show my history</Button>
                            </a>
                            <a href="#">
                                <Button bsStyle="success">My statistic</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default cssModules(TennisView, styles);
