//var axios = require('axios');
var $ = require('jquery');
//var videos = require('../utils/data/videos')

var token = "1dabacb9f74d9460d7125f2078864e18c34406939dbf5c12";
var param = "jobs?access_token=" + token + "&page=";

var SearchUtils = {
    getVideos: function(search, callback, page) {
        page = page || 1;
        var skillTagID = skillTags[skillTagName];
        var angelListURL = "https://api.angel.co/1/tags/" + skillTagID + '/' + param + page;
        console.log('URL', angelListURL);
        // return axios.get(url);
        $.ajax({
            url: angelListURL,
            dataType: 'JSONP',
            error: function(error) {
                console.log("Error: ", error);
            },
            success: function(data) {
                callback(data);
            }
        });
    }
};

module.exports = SearchUtils;
