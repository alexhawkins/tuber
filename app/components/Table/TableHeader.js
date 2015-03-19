var React = require("react");
var Created = require("./Columns/Created");
var Title = require("./Columns/Title");
var Image = require("./Columns/Image");
var Views = require("./Columns/Views");
var Id = require("./Columns/Id");

var TableHeader = React.createClass({

    propTypes: {
        onSortBy: React.PropTypes.func.isRequired,
        orderByDesc: React.PropTypes.object.isRequired
    },

    render: function() {
        var onSortBy = this.props.onSortBy;
        var orderByDesc = this.props.orderByDesc;
        return (
            <thead>
                <tr>
                    <Image />
                    <Title onSortBy={onSortBy} orderByDesc={orderByDesc.title} />
                    <Views onSortBy={onSortBy} orderByDesc={orderByDesc.views} />
                    <Created onSortBy={onSortBy} orderByDesc={orderByDesc.publishedAt} />
                    <Id onSortBy={onSortBy} orderByDesc={orderByDesc.channelId} />
                </tr>
            </thead>
        );
    }
});

module.exports = TableHeader;
