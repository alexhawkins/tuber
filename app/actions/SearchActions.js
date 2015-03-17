var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var SearchUtils = require('../utils/SearchUtils');

var callback = function(response) {
    console.log('RESPONSE', response);
    AppDispatcher.handleAction({
        actionType: AppConstants.GET_VIDEOS,
        data: response
    });
};

var searchActions = {
    getVideos: function(search) {
        SearchUtils.getVideos(search, callback);
    },
    changeSearch: function(name) {
        AppDispatcher.handleAction({
            actionType: appConstants.CHANGE_SEARCH,
            data: search
        });
    }
};

module.exports = searchActions;
