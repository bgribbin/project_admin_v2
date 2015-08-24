var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var Insurance = React.createClass({

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
    UserActions.updateSAT(confirmed);
    UserActions.loadUser();
  },
   render: function() {

      console.log(this.state.user);
      return (
         <div className="profile">
         <p>Insurance</p>
         <form onSubmit={this._onSubmit}>
          <label>Confirm as done?</label>
          <input type="checkbox" className="switch" ref="cb" />
          <button type="submit" className="card--login__submit">Confirm</button>
         </form>

         <div>
         <h2>{this.state.user.username}</h2>
         <p>{this.state.user.sat_completed.toString()}</p>
          </div>
         </div>
      );
   }

});

module.exports = Insurance;