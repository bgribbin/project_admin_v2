var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

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
         <div className="profile">
         <h1>NAIA Registration</h1>
        <p>The Eligibility Centre is something that all students that wish to study out in America have to complete in order to be deemed to be of ‘amateur’ status and therefore no professionals. 
        Further from our conversation, attached is a ‘how to guide’ for the NAIA Eligibility Centre.</p>

        <h4>Steps</h4>
        <p>1) Click on the link below. This will open up an online PDF that provides you with information/tips for registering with the NAIA
           NAIA Registration Process (please click)</p>

        <p>2) Create an account by clicking on 'Register to play' 
            www.playnaia.org</p>

        <p>3)  Please refer to the  PDF as a reference point when answering these questions. </p>

        <p>4) The main question to be careful of is 'Have you played for anyone since leaving high school or from the age of 19'  The answer to this questions is 'NO' as high school in the USA is until 18.</p>

        <p>5) Contact your FES agent once you have completed the registration process. They will then discuss your list of tasks in greater detail.</p>

         </div>
      );
   }

});

module.exports = Eligability;