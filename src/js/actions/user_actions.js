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
  
  loadStory: function(storyId) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_STORY,
      storyId: storyId
    });
    WebAPIUtils.loadStory(storyId);
  },

  updateSAT: function(checkbox) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_SAT,
      confirmed: checkbox
    });
    WebAPIUtils.updateSAT(checkbox);
  }

};