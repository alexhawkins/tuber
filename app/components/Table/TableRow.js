var React = require('react');
var helpers = require('../../utils/helpers/helpers');
var moment = require('moment');

var TableRow = React.createClass({

    propTypes: {
        video: React.PropTypes.object.isRequired
    },
    render: function() {
        var video = this.props.video;
        var youTubeURL = "https://www.youtube.com/channel/";
        var imgURL = video.thumb_url_default;
        var title = video.title;
        var views = helpers.abbrNum(video.views, 2);
        var id = video.id;
        var link =  youTubeURL + id;
        var date = moment(video.created_on).fromNow();

        return (
            <tr>
                <td><a href={link}><img className="img-thumbnail" src={imgURL}/></a></td>
                <td className="bold-title"><a href={link}>{title}</a></td>
                <td className="bold-title">{views}</td>
                <td className="italic-title">{date}</td>
                <td>{id}</td>
            </tr>
        );
    }
});

module.exports = TableRow;
