import React, { Component } from "react";
import jsondata from "./example.json";

class Example extends Component {
    render() {
        return (
            <>
                <h3>Example Json Import</h3>
                <div className="example-json-data">
                    {JSON.stringify(jsondata)}
                </div>
            </>
        )
    }
}

export { Example };