var React = require("react");
var Router = require("react-router");
var TableContainer = require("../Table/TableContainer");

var SearchResultsContainer = React.createClass({
    mixins: [Router.State],
    render: function(){
        var query = this.getParams().query;
        return (
            <TableContainer query={query} />
        );
    }
});

module.exports = SearchResultsContainer;
