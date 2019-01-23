import React, { Component } from "react";
import PropTypes from 'prop-types';

class TextInput extends Component {
    render() {
        return (
            <input type="text" />
        );
    }
}

TextInput.propTypes = {
    text: PropTypes.string
}

export { TextInput };