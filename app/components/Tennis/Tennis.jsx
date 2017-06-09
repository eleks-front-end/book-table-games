import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Button, Col, Row, Table, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from './tennis.style.scss';
import cssModules from 'react-css-modules';
import TimePicker from 'rc-time-picker';
import { Link } from 'react-router';
import { getVisibleGames } from '../../reducer/games';
import GameItem from '../GameItem';
import { GET_TENNIS_GAMES } from '../../constants';
import UsersAutocomplete from '../Common/UsersAutocomplete';

class TennisView extends React.Component {
    componentDidMount () {
        const { participantsSelect, props: { dispatch } } = this;

        if ($.fn.select2) {
            $(participantsSelect).select2({
                theme: 'bootstrap'
            });
        }
        dispatch({ type: GET_TENNIS_GAMES });
    }

    render () {
        const { games } = this.props;

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
                                <UsersAutocomplete/>
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
                            {games.map(game =>
                                (<GameItem
                                    key={game._id}
                                    timeFrom={game.timeFrom}
                                    timeTo={game.timeTo}
                                    users={game.users}/>)
                            )}
                            {/*<tr>*/}
                            {/*<td>9:00-10:00</td>*/}
                            {/*<td>*/}
                            {/*<a href="">Participant 1</a>,&nbsp;*/}
                            {/*<a href=""><b>Me</b></a>*/}
                            {/*</td>*/}
                            {/*<td>*/}
                            {/*<OverlayTrigger placement="top" overlay={tooltipDelete}>*/}
                            {/*<Button bsStyle="danger" className="p-sm">*/}
                            {/*<em className="icon-trash"/>*/}
                            {/*</Button>*/}
                            {/*</OverlayTrigger>*/}
                            {/*</td>*/}
                            {/*</tr>*/}
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

export default connect(
    state => ({
        games: getVisibleGames(state.games)
    })
)(cssModules(TennisView, styles));
