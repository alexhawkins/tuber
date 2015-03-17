var React = require('react');
var classNames = require('classnames');

var Created = React.createClass({
    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        desc: React.PropTypes.bool.isRequired
    },
    handleClick: function () {
        this.props.onSortBy(
            'publishedAt', !this.props.desc
        );
    },
    render: function() {
        var classes = classNames({
            'glyph glyphicon': true,
            'glyphicon-triangle-bottom': this.props.desc,
            'glyphicon-triangle-top': !this.props.desc
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
