var React = require("react");

var TableFilterBar = React.createClass({

    propTypes: {
        onFilterInput: React.PropTypes.func.isRequired,
        filterBarText: React.PropTypes.string.isRequired
    },

    handleChange: function() {
        this.props.onFilterInput(
            this.refs.filterBarText.getDOMNode().value.trim()
        );
    },

    render: function() {
        return (
            <form>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Filter videos by title..."
                    ref="filterBarText"
                    value={this.props.filterBarText}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
});

module.exports = TableFilterBar;
