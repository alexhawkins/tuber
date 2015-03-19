var React = require("react");
var helpers = require("../../utils/helpers/helpers");
var moment = require("moment");

var TableRow = React.createClass({

    propTypes: {
        video: React.PropTypes.object.isRequired,
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        var video = this.props.video;
        var youTubeURL = "https://www.youtube.com/channel/";
        var imgURL = video.thumbnails.default.url;
        var newTitle = this.props.title;
            newTitle = newTitle.length > 50 ?
                newTitle.slice(0,50) + "..." :
                newTitle;
        var views = helpers.abbrNum(video.views, 2);
        var id = video.channelId;
        var link =  youTubeURL + id;
        var date = moment(video.publishedAt).fromNow();

        return (
            <tr>
                <td><a href={link}><img className="img-thumbnail" src={imgURL}/></a></td>
                <td className="video-title"><a href={link}>{newTitle}</a></td>
                <td className="bold-title">{views}</td>
                <td className="italic-title">{date}</td>
                <td>{id}</td>
            </tr>
        );
    }
});

module.exports = TableRow;
