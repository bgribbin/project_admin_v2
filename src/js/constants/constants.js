var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3000";

module.exports = {



  APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
    REGISTRATION:   APIRoot + "/v1/users",
    USER:           APIRoot + "/v1/profile",
    VIDEO:          APIRoot + "/v1/video",
    SAT:          APIRoot + "/v1/sat"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,

    // Routes
    REDIRECT: null,


    UPDATE_USER: null,
    LOAD_USER: null,
    UPDATE_SAT: null,
    RECEIVE_USER: null,
    LOAD_STORY: null,
    RECEIVE_STORY: null,
    CREATE_STORY: null,
    RECEIVE_CREATED_STORY: null
  })

};
