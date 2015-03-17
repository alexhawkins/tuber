var React = require('react');
var TableContainer = require('./Table/TableContainer');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
//var SearchVideos = require('./SearchVideos');
//var Footer = require('./Footer');

var Main = React.createClass({
	render: function(){
		return (
			<div className="main-container">

				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2 search-bar-padding">

					</div>
				</nav>

				<div className="container">
					<RouteHandler/>
				</div>

			</div>
		);
	}
});

module.exports = Main;
