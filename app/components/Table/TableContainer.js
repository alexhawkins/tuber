var React = require("react");
var TableFilterBar = require("./TableFilterBar");
var Table = require("./Table");
var searchStore = require("../../stores/SearchStore");
var searchActions = require("../../actions/SearchActions");

var TableContainer = React.createClass({

    getInitialState: function() {
        return {
            videos: searchStore.getVideos(),
            filterBarText: "",
            sortBy: "title",
            newSort: true,
            orderByDesc: {
                snippet:{
                    views: true,
                    channelId: true,
                    title: true,
                    publishedAt: true
                }
            }
        };
    },

    componentWillReceiveProps: function(obj) {
        searchActions.getVideos(obj.query);
    },

    componentDidMount: function() {
        searchActions.getVideos(this.props.query);
        searchStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        searchStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({
            videos: searchStore.getVideos(),
        });
    },

    handleFilterInput: function(text) {
        this.setState({
            filterBarText: text
        });
    },

    handleSorting: function(option, sortOrder) {
        this.state.orderByDesc.snippet[option] = sortOrder;
        this.setState({
            sortBy: option,
            newSort: true
        });
    },

    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <TableFilterBar
                        filterBarText={this.state.filterBarText}
                        onFilterInput={this.handleFilterInput}
                    />
                </div>
                <Table
                    videos={this.state.videos}
                    filterBarText={this.state.filterBarText}
                    sortBy={this.state.sortBy}
                    newSort={this.state.newSort}
                    onSortBy={this.handleSorting}
                    orderByDesc={this.state.orderByDesc.snippet}
                />
                <div className="panel-footer">&copy; Alex Hawkins &mdash; 2015</div>
            </div>
        );
    }
});

module.exports = TableContainer;
