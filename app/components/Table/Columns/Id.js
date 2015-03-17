var React = require('react');

var Id = React.createClass({

	handleClick: function () {
		this.props.onSortBy(
			'id'
		);
	},

	render: function() {
		return (
			<th onClick={this.handleClick}>Id</th>
		);
	}
});

module.exports = Id;
