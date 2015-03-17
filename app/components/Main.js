var React = require('react');
var TableContainer = require('./Table/TableContainer');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
//var SearchBar = require('./SearchBar/SearchBar');

var Main = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2 search-bar-padding">

                    </div>
                </nav>

                <div className="container">
                    <div className="intro-title">Can't find a video to watch?
                        <span className="main-title">
                            &nbsp;Sort through your favorites below!
                        </span>
                    </div>
                    <RouteHandler/>
                </div>

            </div>
        );
    }
});

module.exports = Main;
