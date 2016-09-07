var SmallAppDispatcher = require('../dispatchers/AppDispatcher.js');
var SmallConstants = require('../constants/constants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  loadUser: function() {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_USER
    });
    WebAPIUtils.loadUser();
  },

  updateSAT: function(checkbox) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_SAT,
      confirmed: checkbox
    });
    WebAPIUtils.updateSAT(checkbox);
  },

  updateUserTasks: function(task, checkbox) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_USER,
      confirmed: checkbox
    });
    WebAPIUtils.updateUserTasks(task, checkbox);
  },

  updateUserProfile: function(profile) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_USER
    });
    console.log("here");
    console.log(profile.sat_score);
    WebAPIUtils.updateUserProfile(profile);
  }

};
