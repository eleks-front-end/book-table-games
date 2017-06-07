import React, { Component } from 'react';
import moment from 'moment';

export default class GameItem extends Component {
    render () {
        const { timeFrom, timeTo, users } = this.props;
        const formatDate = date => moment(date).format('HH:mm');

        return (
            <tr>
                <td>{formatDate(timeFrom)}-{formatDate(timeTo)}</td>
                <td>{users.join(', ')}</td>
            </tr>
        );
    }
}
