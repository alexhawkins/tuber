var AppDispatcher = require("../dispatcher/AppDispatcher");
var appConstants = require("../constants/AppConstants");
var objectAssign = require("react/lib/Object.assign");
var EventEmitter = require("events")
    .EventEmitter;

var CHANGE_EVENT = "change";

var _state = {
    videos: []
};

var setVideos = function(data){
    _state.videos = data;
    console.log(data);
};

var setViews = function(data, setVideos) {
    data.forEach(function(obj){
        viewCount = (Math.floor(Math.random() * 5000000) + 10000);
        obj.snippet.views = viewCount;
    });
    setVideos(data);
};

var searchStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getVideos: function() {
        return _state.videos;
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case appConstants.GET_VIDEOS:
            setViews(action.data, setVideos);
            searchStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = searchStore;
