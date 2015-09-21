var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');
var Completed_form = require('../components/completed_form.js');

var Sat = React.createClass({

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

      var isChecked = this.state.user.sat_completed;
      var checked = isChecked? 'checked' : '';
      return (
         <div className="task-content">
           <div className="title">
            <h1>Test Scores</h1>
           </div>

           <div className="type-system-rounded">
           <h1>This is the title</h1> 
           <p> This is where the content will go</p>
           <p> This is where the content will go</p>
           <p> This is where the content will go</p>
           </div>
         <Completed_form task={"sat"} checked={checked} />
         </div>
      );
   }

});

module.exports = Sat;