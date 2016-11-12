const React = require('react');


var Header = React.createClass({

    getInitialState: function () {
        return {};
    },
    render: function () {

        return (
            <div>
                <h1>Hello, World!</h1>
            </div>
        );
    },

    componentDidMount: function () {

    }
});

module.exports = Header;