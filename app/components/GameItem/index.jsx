import React, { Component } from 'react';

export default class GameItem extends Component {
    render () {
        const { timeFrom, timeTo } = this.props;

        return (
            <tr>
                <td>{timeFrom}-{timeTo}</td>
            </tr>
        );
    }
}
