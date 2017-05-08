import React from 'react';

class ContentWrapper extends React.Component {

    render () {
        let childElement = this.props.children;

        // unwrapped pages
        if (this.props.unwrap) {
            childElement = <div className="unwrap">{this.props.children}</div>;
        }

        return (
            <div className="content-wrapper">
                {childElement}
            </div>
        );
    }

}

export default ContentWrapper;
