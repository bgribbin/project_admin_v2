var SmallAppDispatcher = require('../dispatchers/AppDispatcher.js');
var SmallConstants = require('../constants/constants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  receivePage: function(id) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_PAGE,
      id: id,
    });
    WebAPIUtils.receivePage(id);
    console.log('sending action to server_actions', id);
  }
};
