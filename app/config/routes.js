var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Main = require('../components/Main');
var TableContainer = require('../components/Table/TableContainer.js');
//var SearchResults = require('../components/SearchResults');

var routes = (
	<Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={TableContainer} />
	</Route>
);

module.exports = routes;
