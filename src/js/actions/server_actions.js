var SmallAppDispatcher = require('../dispatchers/AppDispatcher.js');
var SmallConstants = require('../constants/constants.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

 // ... 
};