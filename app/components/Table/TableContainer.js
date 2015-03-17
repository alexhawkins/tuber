var React = require('react');
var TableFilterBar = require('./TableFilterBar');
var Table = require('./Table');
var DATA = require('../../utils/data/data');

var TableContainer = React.createClass({
	getInitialState: function(){
		return {
			filterBarText: '',
			sortBy: 'title',
			newSort: true
		};
	},
	handleFilterInput: function(text) {
		this.setState({
			filterBarText: text
		});
	},
	handleSorting: function(option) {
		this.setState({
			sortBy: option,
			newSort: true
		});
	},
	render: function() {
		return (
			<div>
				<TableFilterBar
					filterBarText={this.state.filterBarText}
					onFilterInput={this.handleFilterInput}
				/>
				<Table
					videos={DATA}
					filterBarText={this.state.filterBarText}
					sortBy={this.state.sortBy}
					newSort={this.state.newSort}
					onSortBy={this.handleSorting}
				/>
			</div>
		);
	}
});

module.exports = TableContainer;
