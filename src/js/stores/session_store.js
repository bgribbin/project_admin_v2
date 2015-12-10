var React = require('react');
var SideNav = require('../components/sidenav.js');

var SmallAppDispatcher = require('../dispatchers/AppDispatcher.js');
var SmallConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Router = require('react-router');
var routes = require('../config/routes.js');

var router = Router.create({
  routes: routes,
  location: null
});

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

// Load an access token from the session storage, you might want to implement
// a 'remember me' using localSgorage
var _accessToken = sessionStorage.getItem('accessToken')
var _email = sessionStorage.getItem('email')
var _errors = [];

var SessionStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  isLoggedIn: function() {
    return _accessToken ? true : false;    
  },

  getAccessToken: function() {
    return _accessToken;
  },

  getEmail: function() {
    return _email;
  },

  getErrors: function() {
    return _errors;
  }

});

SessionStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.LOGIN_RESPONSE:
      console.log("login response rec");
      if (action.json && action.json.access_token) {
        _accessToken = action.json.access_token;
        _email = action.json.email;

        sessionStorage.setItem('accessToken', _accessToken);
        sessionStorage.setItem('email', _email);
        SessionStore.emitChange();
        router.transitionTo('/profile');
      }
      if (action.errors) {
        _errors = action.errors;
        sessionStorage.setItem('errors', _errors);
        SessionStore.emitChange();
      }
      break;

    case ActionTypes.LOGOUT:
      _accessToken = null;
      _email = null;
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('email');
      SessionStore.emitChange();
      router.transitionTo('/');
      break;

    default:
  }

  return true;
});

module.exports = SessionStore;