var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var searchYouTubeUtils = require('../utils/SearchYouTubeUtils');

var callback = function(response) {
    console.log('RESPONSE', response);
    AppDispatcher.handleAction({
        actionType: AppConstants.GET_VIDEOS,
        data: response
    });
};

var searchActions = {
    getVideos: function(query) {
        searchYouTubeUtils.getVideos(query, callback);
    }
};

module.exports = searchActions;
