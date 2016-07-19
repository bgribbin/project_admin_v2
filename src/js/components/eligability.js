var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');
var Completed_form = require('../components/completed_form.js');

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
        <div>
         <div className="task-content">
          <div className="title">
            <h1>NAIA Registration</h1>
          </div>
            <div className="task-text">
              The Eligibility Centre is an online form that all students that wish to study in America have to complete in order to be deemed to be of ‘amateur’ status, therefore no professionals are able to compete at Collegiate level. attached is information on how to complete the NCAA & NAIA eligibility Centres respectively.  The eligibility centre isn’t a time to sell yourself, please ensure that you are precise with any teams that you have represented, i.e Crystal Palace U17, not Crystal Palace F.C.
              <br />
              <br />
              Please read through the attached PDF document for either the NCAA or NAIA eligibility Centre as each one will ask different questions. Only complete the Eligibility Centre that your Future Elite Rep has asked you to.
              <br />
              <br />
              Before completing the form and sending it for review, please speak with your Future Elite Rep so that they can ensure that the form is completed correctly as once it is submitted, no changes can be made.
              <br />
              <br />
              Once you have completed the Eligibility Centre form, it will be sent for review and you will subsequently be sent ‘Tasks’ to complete. Refer to the relevant PDF (NAIA or NCAA) for help with any tasks you may be required to complete.
              <br />
              <br />
               N.B After submission be sure to log onto your profile at least once a week to check with the status of your application.
               <br />
               <br />

             <div className="task-video">
              <iframe width="420" height="315" className="youtube"
                src="https://www.youtube.com/embed/T5cwzGHuHB8">
              </iframe>
             </div>


            </div>
            </div>
            <Completed_form task={"eligability"} />
        </div>
      );
   }

});

module.exports = Eligability;
