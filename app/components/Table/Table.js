var React = require('react');

var TableHeader = require('./TableHeader');
var TableRow = require('./TableRow');

var Table = React.createClass({

	handleSort: function(){
		var sortBy = this.props.sortBy;
		this.props.videos.sort(function(y,x){
			if (x[sortBy]> y[sortBy])
				return 1;
			if (x[sortBy] < y[sortBy])
				return -1;
			else
				return 0;
		});
		if(sortBy === 'title')
			this.props.videos.reverse();
		this.props.newSort = false;
	},

	render: function() {
		var tableRows = [];

		if(this.props.newSort) this.handleSort();

		this.props.videos.forEach(function(video, index) {
			var title = video.title.toLowerCase().replace(/[@"\W|_"]+/g, '');
			var filterText = this.props.filterBarText.toLowerCase();
			if(title.indexOf(filterText) === -1)
				return;
			tableRows.push(<TableRow video={video} key={index} />);
		}.bind(this));

		return (
			<table>
				<TableHeader onSortBy={this.props.onSortBy} />
				<tbody>{tableRows}</tbody>
			</table>
		);
	}
});

module.exports = Table;
