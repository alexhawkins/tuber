var React = require('react');
var TableFilterBar = require('./TableFilterBar');
var Table = require('./Table');
var DATA = require('../../utils/data/data');

var TableContainer = React.createClass({
    getInitialState: function(){
        return {
            filterBarText: '',
            sortBy: 'title',
            newSort: true,
            desc: {
                id: true,
                title: true,
                views: true,
                created_on: true,
                thumb_url_default: true,
            }
        };
    },
    handleFilterInput: function(text) {
        this.setState({
            filterBarText: text
        });
    },
    handleSorting: function(option, sortOrder) {
        this.state.desc[option] = sortOrder;
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
                    videos={DATA}
                    filterBarText={this.state.filterBarText}
                    sortBy={this.state.sortBy}
                    newSort={this.state.newSort}
                    onSortBy={this.handleSorting}
                    desc={this.state.desc}
                />
            <div className="panel-footer">&copy; Alex Hawkins &mdash; 2015</div>
            </div>
        );
    }
});

module.exports = TableContainer;
