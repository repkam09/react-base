
import React, { Component } from "react";
import { get } from "../../utils/network";

class FetchApiData extends Component {
    constructor() {
        super();
        this.state = { data: {} };
        this.fetchApiData();
    }

    fetchApiData() {
        const self = this;
        get("https://api.repkam09.com/api/getip").then((json) => {
            self.setState({ data: json });
        });
    }

    render() {
        return (
            <>
                <h3>Example Fetched Data</h3>
                <div className="example-fetch-data">
                    {JSON.stringify(this.state.data)}
                </div>
            </>
        );
    }
}

export { FetchApiData };