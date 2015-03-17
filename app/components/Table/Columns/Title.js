var React = require('react');

var Title = React.createClass({

    handleClick: function () {
        this.props.onSortBy(
            'title'
        );
    },

    render: function() {
        return (
            <th onClick={this.handleClick}>Title</th>
        );
    }
});

module.exports = Title;
