var keyMirror = require('keymirror');

// if (process.env.NODE_ENV == 'production') {
//   var APIRoot = process.env.BACK_END_PROD
// }
// else {
//   var APIRoot = process.env.BACK_END_DEV
// }

var APIRoot = 'http://admin.futureelitesports.com'

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
    REGISTRATION:   APIRoot + "/v1/users",
    USER:           APIRoot + "/v1/profile",
    VIDEO:          APIRoot + "/v1/video",
    PAGE:         APIRoot + "/v1/page",
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

    //USER
    UPDATE_USER: null,
    LOAD_USER: null,
    UPDATE_SAT: null,
    RECEIVE_USER: null,

    //page
    LOAD_PAGE: null,
    RECEIVE_PAGE: null,
  })

};
