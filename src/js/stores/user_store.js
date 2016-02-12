var SmallAppDispatcher = require('../dispatchers/AppDispatcher.js');
var SmallConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _errors = [];
var _user =  {
                "username": "",
                "id": 2,
                "email": "",
                "first_name": "",
                "last_name": "",
                "avatar_url": "",
                "sport_id": 1,
                "video_completed": false,
                "sat_completed": false,
                "insurance_completed": false,
                "cv_completed": false,
                "eligability_completed": false,
                "visa_completed": false
             };

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
      _user = action.json;
      console.log('RECEIVE_USER');
      UserStore.emitChange();
      break;



  }

  return true;
});

module.exports = UserStore;
