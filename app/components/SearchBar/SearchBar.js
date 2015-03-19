var React = require("react");
var Router = require("react-router");
var searchStore = require("../../stores/SearchStore");

var SearchBar = React.createClass({
    mixins: [Router.Navigation],
    handleSubmit: function(){
        var query = this.refs.query.getDOMNode().value.trim(); // remove trailing white space
        query = query.replace(/\s+/g, "-"); //add dash if spaces search
        this.refs.query.getDOMNode().value = "";
        if(query !== "") // don"t search if nothing has been entered
            this.transitionTo("search", {query: query});
    },
    render: function(){
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-describedby="sizing-addon2"
                            ref="query"
                        />
                        <span className="input-group-btn">
                            <button
                                type="submit"
                                className="btn btn-default search-button">Video Search!</button>
                        </span>
                    </div>
                </form>
            );
    }

});

module.exports = SearchBar;
