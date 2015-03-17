//var axios = require('axios');
var $ = require('jquery');

var searchYouTubeUtils = {

    getVideos: function(query, callback) {
        query = query || 'engineering';
        console.log(query);
        var baseURL = "https://www.googleapis.com/youtube/v3/search?safeSearch=moderate&part=snippet&q=";
        var maxResults = "&maxResults=50&key=";
        // return axios.get(url);
        var apiKey = "AIzaSyC4W2PcBHccKu03OiW8l5Ff8LfsgdS5C44";
        var videoURL = baseURL + query + maxResults + apiKey;
        console.log(videoURL);

        $.ajax({
            url: videoURL,
            type: "GET",
            error: function(error) {
                console.log("Error: ", error);
            },
            success: function(data) {
                console.log(data.items);
                callback(data.items);
            }
        });
    }
};

module.exports = searchYouTubeUtils;
