import React, { Component } from "react";
import PropTypes from 'prop-types';

class TextInput extends Component {
    render() {
        return (
            <input type="text" defaultValue={this.props.defaultValue} />
        );
    }
}

TextInput.propTypes = {
    defaultValue: PropTypes.string
}

TextInput.defaultProps = {
    defaultValue: "Default Value"
}

export { TextInput };