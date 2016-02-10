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
         <div className="task-content">
          <div className="title">
            <h1>NAIA Registration</h1>
            <hr/>
          </div>
            <div className="task-text">
              <p>The Eligibility Centre is something that all students that wish to study out in America have to complete in order to be deemed to be of ‘amateur’ status and therefore no professionals.
              Further from our conversation, attached is a ‘how to guide’ for the NAIA Eligibility Centre.</p>

              <h4>STEPS</h4>
              <div className="step-cont">
                <p className="step-number">1 </p>
                <p className="step-para"> Click on the link below. This will open up an online PDF that provides you with information/tips for registering with the NAIA
                   NAIA Registration Process (please click)</p>
              </div>

              <div className="step-cont">
                <p className="step-number">2 </p>
                <p className="step-para"> Create an account by clicking on 'Register to play' www.playnaia.org</p>
              </div>

              <div className="step-cont">
                <p className="step-number">3 </p>
                <p className="step-para"> Please refer to the  PDF as a reference point when answering these questions. </p>
              </div>

              <div className="step-cont">
                <p className="step-number">4 </p>
                <p className="step-para"> The main question to be careful of is 'Have you played for anyone since leaving high school or from the age of 19'
                    The answer to this questions is 'NO' as high school in the USA is until 18.</p>
              </div>

              <div className="step-cont">
                <p className="step-number">5 </p>
                <p className="step-para"> Contact your FES agent once you have completed the registration process. They will then discuss your list of tasks in greater detail.</p>
              </div>

            </div>

            <Completed_form task={"eligability"} />
        </div>
      );
   }

});

module.exports = Eligability;
