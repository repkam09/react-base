import React, { Component } from "react";
import * as jsonexample from "./example.json";

export default class Example extends Component {
    render() {
        return (
            <div>
                {jsonexample}
            </div>
        )
    }
}