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
             <h1>Coach Contact</h1>
             <p className="task-text">Coaches will not recruit you on your playing ability alone, they want to know how you will fit into their team and what type of person you are.  When speaking with coaches it is important that you are pro-active and punctual. Do not leave emails for a week before you respond and do not be afraid to email the coach and update him on a match that you played well in. Stay in contact with the coach, remember he will be speaking to other athletes, not just you, so its important to keep in the forefront of the coaches mind.
              <br />
              <br />
              Remember, the coach is recruiting you, not your mum or dad! Respond to emails yourself and ask questions yourself!
              <br />
              <br />

              <a href="/assets/coach.pdf" download="/assets/coach.pdf">Attached is a Pdf</a> that explains about Coach contact and the various forms that you will be asked to complete. </p>

             </div>
           </div>
           <Completed_form task={"insurance"} />
         </div>
      );
   }

});

module.exports = Insurance;
