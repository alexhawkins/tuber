var React = require('react');

var TableHeader = require('./TableHeader');
var TableRow = require('./TableRow');

var Table = React.createClass({

    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        videos: React.PropTypes.array.isRequired,
        filterBarText: React.PropTypes.string.isRequired,
        sortBy: React.PropTypes.string.isRequired,
        newSort: React.PropTypes.bool.isRequired,
        desc: React.PropTypes.object.isRequired
    },
    handleSort: function(){
        var sortBy = this.props.sortBy;
        var videos = this.props.videos;
        videos.sort(function(y,x){
            if (x[sortBy]> y[sortBy])
                return 1;
            if (x[sortBy] < y[sortBy])
                return -1;
            else
                return 0;
        });

        this.props.newSort = false;
        if(sortBy === 'title')
            videos.reverse();
        if(!this.props.desc[sortBy])
            videos.reverse();
    },
    render: function() {
        var tableRows = [];
        var videos = this.props.videos;
        var userInput = this.props.filterBarText;

        if(this.props.newSort) this.handleSort();

        videos.forEach(function(video, index) {
            var title = video.title.toLowerCase().replace(/[@"\W|_"]+/g, '');
            var filterText = userInput.toLowerCase();
            if(title.indexOf(filterText) === -1)
                return;
            tableRows.push(<TableRow video={video} key={index} />);
        }.bind(this));

        return (
            <table className="table">
                <TableHeader
                    onSortBy={this.props.onSortBy}
                    desc={this.props.desc}
                />
                <tbody>{tableRows}</tbody>
            </table>
        );
    }
});

module.exports = Table;
