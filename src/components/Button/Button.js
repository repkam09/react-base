import React, { Component } from "react";
import PropTypes from 'prop-types';

/**
 * A generic button class that handles many things! 
 */
class Button extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string
}

export { Button };