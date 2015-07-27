var SmallAppDispatcher = require('../dispatchers/AppDispatcher.js');
var SmallConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _stories = [];
var _errors = [];
var _story = { title: "", body: "", user: { username: "" } };

var _user =  {"username": "","id": 2,"email": "","video_uploaded": false} ;

var UserStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllStories: function() {
    return _stories;
  },

  getStory: function() {
    return _story;
  },
  getUser: function() {
    return _user;
  },

  getErrors: function() {
    return _errors;
  }

});

UserStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    
    case ActionTypes.RECEIVE_USER:
      console.log("I'm here");
      _user = action.json;
      UserStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CREATED_STORY:
      if (action.json) {
        _stories.unshift(action.json.story);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      UserStore.emitChange();
      break;
    
    case ActionTypes.RECEIVE_STORY:
      if (action.json) {
        _story = action.json.story;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      UserStore.emitChange();
      break;
  }

  return true;
});

module.exports = UserStore;

