var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var Eligability = React.createClass({

   getInitialState: function() {
    return { 
      user: UserStore.getUser(), 
      errors: []
    };
  },
 
  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
    UserActions.loadUser();
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ 
      user: UserStore.getUser(),
      errors: UserStore.getErrors()
    }); 
  },
   render: function() {
      return (
         <div className="profile">
         <p>Eligability </p>

         </div>
      );
   }

});

module.exports = Eligability;