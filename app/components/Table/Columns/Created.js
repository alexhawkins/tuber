var React = require('react');

var Created = React.createClass({

	handleClick: function () {
		this.props.onSortBy(
			'created_on'
		);
	},

	render: function() {
		return (
			<th onClick={this.handleClick}>Created</th>
		);
	}
});

module.exports = Created;
