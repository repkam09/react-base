import React, { Component } from "react";
import PropTypes from 'prop-types';

class FileUpload extends Component {
    constructor() {
        super();
        this.fileUploaded = this.handleFileUpload.bind(this);
    }

    handleFileUpload(event) {

    }

    render() {
        return (
            <input type="file" onChange={this.fileUploaded} />
        );
    }
}

FileUpload.propTypes = {
    types: PropTypes.string
}

FileUpload.defaultProps = {
    types: "image/*"
}

export { FileUpload };