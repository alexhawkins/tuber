var React = require('react');
var Router = require('react-router');
var searchStore = require('../../stores/SearchStore');

var SearchBar = React.createClass({
    mixins: [Router.Navigation],
    handleSubmit: function(){
        var query = this.refs.query.getDOMNode().value;
        this.refs.query.getDOMNode().value = '';
        this.transitionTo('search', {query: query});
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <span className="input-group-addon"
                          id="sizing-addon2">
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-describedby="sizing-addon2"
                        ref="query"
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-default">Go!</button>
                    </span>
                </div>
            </form>
        );
    }
});

module.exports = SearchBar;
