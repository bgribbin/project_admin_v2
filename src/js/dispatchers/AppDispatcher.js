var Constants = require('../constants/constants.js');
var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var PayloadSources = Constants.PayloadSources;

var AppDispatcher = assign(new Dispatcher(), {

	handleServerAction: function(action) {
    
    this.dispatch({
      	    source: PayloadSources.SERVER_ACTION,
      		action: action
    })
  	},

  	handleViewAction: function(action) {
		console.log('action', action)
		this.dispatch({
			source: PayloadSources.VIEW_ACTION,
			action: action
		})
	}
});

module.exports = AppDispatcher;