var React = require('react');
var helpers = require('../../utils/helpers/helpers');
var moment = require('moment');

var TableRow = React.createClass({

	render: function() {
		var youTubeURL = "https://www.youtube.com/channel/";
		var img = <img src={this.props.video.thumb_url_default}/>;
		var title = <a href={youTubeURL + this.props.video.title}>{this.props.video.title}</a>;
		var views = <span>{helpers.abbrNum(this.props.video.views, 2)}</span>;
		var date = <span>{moment(this.props.video.created_on).fromNow()}</span>;
		var id = <span>{this.props.video.id}</span>;

		return (
			<tr>
				<td>{img}</td>
				<td>{title}</td>
				<td>{views}</td>
				<td>{date}</td>
				<td>{id}</td>
			</tr>
		);
	}
});

module.exports = TableRow;
