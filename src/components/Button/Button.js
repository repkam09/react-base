import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Button.css";

/**
 * A generic button class that handles many things! 
 */
class Button extends Component {
    render() {
        return (
            <button className="generic-button">
                {this.props.text}
            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string     /* This is the text prop */
}

Button.defaultProps = {
    text: "Example Button"
}

export { Button };