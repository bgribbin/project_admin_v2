var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var Profile = React.createClass({

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
         <div className="main_header"><p>Profile</p></div>
           <p>Username + { this.state.user.username }</p>
           <p>email + { this.state.user.email }</p>
           <p>user id + { this.state.user.id }</p>
           <br/>
           <p>sat + {this.state.user.sat_completed.toString()}</p>

         </div>
      );
   }

});

module.exports = Profile;