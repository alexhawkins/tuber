var React = require("react");
var TableHeader = require("./TableHeader");
var TableRow = require("./TableRow");

var Table = React.createClass({

    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        filterBarText: React.PropTypes.string.isRequired,
        sortBy: React.PropTypes.string.isRequired,
        newSort: React.PropTypes.bool.isRequired,
        orderByDesc: React.PropTypes.object.isRequired,
        videos: React.PropTypes.array.isRequired
    },

    handleSort: function(){
        var sortBy = this.props.sortBy;
        var videos = this.props.videos;
        videos.sort(function(y,x){
            y = y.snippet;
            x = x.snippet;
            if (x[sortBy] > y[sortBy])
                return 1;
            if (x[sortBy] < y[sortBy])
                return -1;
            else
                return 0;
        });
        this.props.newSort = false;
        if(sortBy === "title")
            videos.reverse();
        if(!this.props.orderByDesc[sortBy])
            videos.reverse();
    },

    handleTableRows: function(videos) {
        var userInput = this.props.filterBarText;
        return videos.map(function(video, index) {
            video = video.snippet;
            var title = video.title;
            var newTitle = title.toLowerCase().replace(/[@"\W|_"]+/g, "");
            var filterText = userInput.toLowerCase();
            if(newTitle.indexOf(filterText) !== -1)
                return (<TableRow title={title} video={video} key={index} />);
        }.bind(this));
    },

    render: function() {
        var tableRows = [];
        var videos = this.props.videos;
        if(this.props.newSort) this.handleSort();

        tableRows = this.handleTableRows(videos);

        return (
            <table className="table">
                <TableHeader
                    onSortBy={this.props.onSortBy}
                    orderByDesc={this.props.orderByDesc}
                />
                <tbody>{tableRows}</tbody>
            </table>
        );
    }
});

module.exports = Table;
