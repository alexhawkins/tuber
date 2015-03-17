var React = require('react');
var TableFilterBar = require('./TableFilterBar');
var Table = require('./Table');
var DATA = require('../../utils/data/data');
var searchStore = require('../../stores/SearchStore');
var searchActions = require('../../actions/SearchActions');

var TableContainer = React.createClass({
    getInitialState: function() {
        return {
            videos: searchStore.getVideos(),
            filterBarText: '',
            sortBy: 'title',
            newSort: true,
            desc: {
                snippet:{
                    views: true,
                    channelId: true,
                    title: true,
                    publishedAt: true
                }
            }
            // filterBarText: searchStore.getFilterText(),
            // newSort: searchStore.getSortStatus(),
            // sortBy: searchStore.getSortBy(),
            // order: searchStore.getAscOrDesc()
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
            // filterBarText: searchStore.getFilterText(),
            // newSort: searchStore.getSortStatus(),
            // sortBy: searchStore.getSortBy(),
            // order: searchStore.getAscOrDesc()
        });
    },
    handleFilterInput: function(text) {
        this.setState({
            filterBarText: text
        });
    },
    handleSorting: function(option, sortOrder) {
        this.state.desc.snippet[option] = sortOrder;
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
                    desc={this.state.desc.snippet}
                />
                <div className="panel-footer">&copy; Alex Hawkins &mdash; 2015</div>
            </div>
        );
    }
});

module.exports = TableContainer;
