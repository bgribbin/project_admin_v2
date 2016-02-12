var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');
var Completed_form = require('../components/completed_form.js');

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
         <div>
           <div className="task-content">
             <div className="title">
             <h1>Insurance</h1>
             </div>
           </div>
           <Completed_form task={"insurance"} />
         </div>
      );
   }

});

module.exports = Insurance;
