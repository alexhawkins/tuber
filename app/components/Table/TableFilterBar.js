var React = require('react');

var TableFilterBar = React.createClass({

    handleChange: function() {
        this.props.onFilterInput(
            this.refs.filterBarText.getDOMNode().value.trim()
        );
    },
    render: function() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Filter by title..."
                    ref='filterBarText'
                    value={this.props.filterBarText}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
});

module.exports = TableFilterBar;
