import React from 'react';
import moment from 'moment';

export default class GameItem extends React.Component {
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
