var React = require('react');

var Views = React.createClass({

    handleClick: function () {
        this.props.onSortBy(
            'views'
        );
    },

    render: function() {
        return (
            <th onClick={this.handleClick}>Views</th>
        );
    }
});

module.exports = Views;
