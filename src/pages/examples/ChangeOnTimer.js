
import React, { Component } from "react";

class ChangeOnTimer extends Component {
    constructor() {
        super();
        this.state = { toggle: false };
        this.startTimer();
    }

    startTimer() {
        const self = this;
        setInterval(() => {
            self.setState({ toggle: !this.state.toggle });
        }, 1000);
    }

    render() {
        const rendertext = this.state.toggle ? "Version One" : "Version Two"
        return (
            <>
                <h3>Change On Timer</h3>
                <div className="example-fetch-data">
                    {rendertext}
                </div>
            </>
        );
    }
}

export { ChangeOnTimer };