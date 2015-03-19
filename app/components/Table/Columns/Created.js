var React = require("react");
var classNames = require("classnames");

var Created = React.createClass({

    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        orderByDesc: React.PropTypes.bool.isRequired
    },

    handleClick: function () {
        this.props.onSortBy(
            "publishedAt", !this.props.orderByDesc
        );
    },

    render: function() {
        var classes = classNames({
            "glyph glyphicon": true,
            "glyphicon-triangle-bottom": this.props.orderByDesc,
            "glyphicon-triangle-top": !this.props.orderByDesc
        });
        return (
            <th>Created
                <span
                    onClick={this.handleClick}
                    className={classes}
                    aria-hidden="true">
                </span>
            </th>
        );
    }
});

module.exports = Created;
