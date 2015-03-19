var React = require("react");
var classNames = require("classnames");

var Title = React.createClass({

    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        orderByDesc: React.PropTypes.bool.isRequired
    },

    handleClick: function () {
        this.props.onSortBy(
            "title", !this.props.orderByDesc
        );
    },

    render: function() {
        var classes = classNames({
            "glyph glyphicon": true,
            "glyphicon-sort-by-alphabet": this.props.orderByDesc,
            "glyphicon-sort-by-alphabet-alt": !this.props.orderByDesc
        });
        return (
            <th>Title
                <span
                    onClick={this.handleClick}
                    className={classes}
                    aria-hidden="true">
                </span>
            </th>
        );
    }
});

module.exports = Title;
