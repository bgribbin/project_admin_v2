var SmallAppDispatcher = require('../dispatchers/AppDispatcher.js');
var SmallConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _errors = [];
var _page =  {
                "name": "sat",
                "body": "bingo",
             };

var PageStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getPage: function() {
    return _page;
  },

  getErrors: function() {
    return _errors;
  }

});

PageStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.type) {
    case ActionTypes.RECEIVE_PAGE:
      _page = action.json;
      console.log('RECEIVE_PAGE');
      PageStore.emitChange();
      break;
  }

  return true;
});

module.exports = PageStore;
