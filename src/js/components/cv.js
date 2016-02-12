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
         <div>
         <div className="task-content">
         <div className="title">
            <h1 className="">Sports CV</h1>
         </div>


         <div className="task-text">
         <div className="download-comp">
         <button className="std-btn download-btn"><a className="btn-a" href="assets/images/check.png" download="/assets/images/check.png">Download CV Template</a></button>
         </div>

            <p>Please use the template attached and include as much information as possible.
            Your Future Elite Rep will then go over any changes that need to be made.</p>

            <br />
            <div className="upload-comp">
           <button className="std-btn upload-btn"><a className="btn-a" href="https://www.dropbox.com/request/nXUQO5DMSoknWSooJ6jF">Upload your CV</a></button>
           </div>
         </div>
         </div>
         <Completed_form task={"cv"} />
         </div>
      );
   }

});

module.exports = CV;
