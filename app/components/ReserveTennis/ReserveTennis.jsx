import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Button, Col, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';
import styles from './reserve-tennis.style.scss';
import cssModules from 'react-css-modules';
import TimePicker from 'rc-time-picker';

class TennisReserveView extends React.Component {
    componentDidMount () {
        const { participantsSelect } = this;

        const formatRepo = user => {
            if (user.loading) {
                return user.text;
            }

            return `<div>${user.id}</div>`;
        }

        const formatRepoSelection = user => user.id || user.text;

        if ($.fn.select2) {
            $(participantsSelect).select2({
                ajax: {
                    url: `${process.env.REACT_APP_WEBAPI_URL}users`,
                    dataType: 'json',
                    delay: 300,
                    data: params => ({
                        q: params.term
                    }),
                    processResults: data => ({
                        results: data.Resources
                    }),
                    cache: true
                },
                minimumInputLength: 4,
                escapeMarkup: markup => markup,
                templateResult: formatRepo, // omitted for brevity, see the source of this page
                templateSelection: formatRepoSelection,
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
                        <h1 className="text-thin">Reserve Table tennis</h1>
                        <Row>
                            <div className="col-sm-4">
                                <TimePicker
                                    showSecond={false}
                                    className="xxx"
                                    placeholder="From"
                                    // onChange={onChange}
                                    // format={format}
                                    use12Hours
                                />

                                <TimePicker
                                    showSecond={false}
                                    className="xxx"
                                    placeholder="To"
                                    // onChange={onChange}
                                    // format={format}
                                    use12Hours
                                />
                            </div>
                            <div className="form-group col-sm-3">
                                { /*  SELECT2 */ }
                                <select ref={input => this.participantsSelect = input} className="form-control"
                                        data-placeholder="Search by user" multiple>
                                    <option></option>
                                    <option value="1">Participant 1</option>
                                    <option value="2">Participant 2</option>
                                    <option value="3">Participant 3</option>
                                    <option value="4">Participant 4</option>
                                </select>
                            </div>
                        </Row>
                        <Button bsStyle="primary">Reserve</Button>

                        <h2 className="text-thin">My reserved games</h2>

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
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default cssModules(TennisReserveView, styles);
