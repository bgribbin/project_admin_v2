var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');
var Completed_form = require('../components/completed_form.js');

var CV = React.createClass({

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
         <div className="task-content">
         <div className="title">
            <h1 className="">Sports CV</h1>
            <p>Please use the template attached and include as much information as possible.
            Your Future Elite Rep will then go over any changes that need to be made.</p>
         </div>
         <Completed_form task={"cv"} />
         </div>
      );
   }

});

module.exports = CV;