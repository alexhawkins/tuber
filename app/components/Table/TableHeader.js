var React = require('react');
var Created = require('./Columns/Created');
var Title = require('./Columns/Title');
var Image = require('./Columns/Image');
var Views = require('./Columns/Views');
var Id = require('./Columns/Id');

var TableHeader = React.createClass({
	render: function() {
		return (
			<thead>
				<tr>
					<Image onSortBy={this.props.onSortBy} />
					<Title onSortBy={this.props.onSortBy} />
					<Views onSortBy={this.props.onSortBy} />
					<Created onSortBy={this.props.onSortBy} />
					<Id onSortBy={this.props.onSortBy} />
				</tr>
			</thead>
		);
	}
});

module.exports = TableHeader;
