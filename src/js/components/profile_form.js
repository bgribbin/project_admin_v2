var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var ProfileForm = React.createClass({

   getInitialState: function() {
      this.setState({
         first_name: ""
      })
   }

})

module.exports = ProfileForm;