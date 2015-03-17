var React = require('react');

var Image = React.createClass({

	handleClick: function () {
		this.props.onSortBy(
			'thumb_url_default'
		);
	},

	render: function() {
		return (
			<th onClick={this.handleClick}>Image</th>
		);
	}
});

module.exports = Image;
