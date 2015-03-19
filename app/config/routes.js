var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Main = require("../components/Main");
var SearchResultsContainer = require("../components/SearchBar/SearchResultsContainer");
var TableContainer = require("../components/Table/TableContainer");

var routes = (
    <Route name="app" path="/" handler={Main}>
        <Route name="search" path="search/:query" handler={SearchResultsContainer} />
        <DefaultRoute handler={TableContainer} />
    </Route>
);

module.exports = routes;
