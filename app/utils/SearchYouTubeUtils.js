var $ = require("jquery");

var searchYouTubeUtils = {

    getVideos: function(query, callback) {
        query = query || "san francisco";
        var baseURL = "https://www.googleapis.com/youtube/v3/search?";
        var specs = "safeSearch=moderate&part=snippet&q=";
        var maxResults = "&maxResults=50&key=";
        var apiKey = "AIzaSyC4W2PcBHccKu03OiW8l5Ff8LfsgdS5C44";
        var videoURL = baseURL + specs + query + maxResults + apiKey;

        $.ajax({
            url: videoURL,
            type: "GET",
            error: function(error) {
                console.log("Error: ", error);
            },
            success: function(data) {
                callback(data.items);
            }
        });
    }
};

module.exports = searchYouTubeUtils;
