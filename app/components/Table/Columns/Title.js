var React = require('react');
var classNames = require('classnames');

var Title = React.createClass({
    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        desc: React.PropTypes.bool.isRequired
    },
    handleClick: function () {
        this.props.onSortBy(
            'title', !this.props.desc
        );
    },
    render: function() {
        var classes = classNames({
            'glyph glyphicon': true,
            'glyphicon-sort-by-alphabet': this.props.desc,
            'glyphicon-sort-by-alphabet-alt': !this.props.desc
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
