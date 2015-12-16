var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var Completed = React.createClass({

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
  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var confirmed = this.refs.cb.getDOMNode().checked;
    var task = this.props.task;
    console.log(task);
    UserActions.updateUserTasks(task, confirmed);
    UserActions.loadUser();
  },
   render: function() {


      return (
         <form className="confirm-form" onSubmit={this._onSubmit}>
          <label>Mark as completed once done</label>
          <input type="checkbox" className="switch" ref="cb" defaultChecked={this.props.checked} />
          <button type="submit" className="std-btn">Completed</button>
         </form>
      );
   }

});

module.exports = Completed;