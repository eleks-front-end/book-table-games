import React from 'react';

class DataToggleState extends React.Component {
    componentDidMount () {
        this.setState({
            toggle: true
        });
    }

    toggle (event) {
        event.preventDefault();

        const { toggleClass, target } = this.props;
        const { toggle } = this.state;

        this.setState({
            toggle: !toggle
        });

        // Specify a target selector to toggle classname
        // use body by default
        const $target = target ? $(target) : $('body');

        $target.toggleClass(toggleClass, !toggle);
    }

    render () {
        return (<a href="#" role="button" onClick={this.toggle.bind(this)}>
            {this.props.children}
        </a>);
    }
}

export default DataToggleState;
