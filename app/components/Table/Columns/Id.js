var React = require("react");
var classNames = require("classnames");

var Id = React.createClass({

    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        orderByDesc: React.PropTypes.bool.isRequired
    },

    handleClick: function () {
        this.props.onSortBy(
            "channelId", !this.props.orderByDesc
        );
    },

    render: function() {
        var classes = classNames({
            "glyph glyphicon": true,
            "glyphicon-triangle-bottom": this.props.orderByDesc,
            "glyphicon-triangle-top": !this.props.orderByDesc
        });
        return (
            <th>Identification
                <span
                    onClick={this.handleClick}
                    className={classes}
                    aria-hidden="true">
                </span>
            </th>
        );
    }
});

module.exports = Id;
