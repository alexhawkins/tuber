var React = require('react');
var Created = require('./Columns/Created');
var Title = require('./Columns/Title');
var Image = require('./Columns/Image');
var Views = require('./Columns/Views');
var Id = require('./Columns/Id');

var TableHeader = React.createClass({

    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        desc: React.PropTypes.object.isRequired
    },
    render: function() {
        var onSortBy = this.props.onSortBy;
        var desc = this.props.desc;
        return (
            <thead>
                <tr>
                    <Image />
                    <Title onSortBy={onSortBy} desc={desc.title} />
                    <Views onSortBy={onSortBy} desc={desc.views} />
                    <Created onSortBy={onSortBy} desc={desc.publishedAt} />
                    <Id onSortBy={onSortBy} desc={desc.channelId} />
                </tr>
            </thead>
        );
    }
});

module.exports = TableHeader;
