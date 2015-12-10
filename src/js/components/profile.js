var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var Profile = React.createClass({

   getInitialState: function() {
    return { 
      user: UserStore.getUser(), 
      errors: [],
      first_name: UserStore.getUser().first_name,
      last_name: UserStore.getUser().last_name,
      dob: UserStore.getUser().dob,
      sport: UserStore.getUser().first_name
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
  _handleChange: function(e) {

    var state = {}
    state[e.target.name] =  e.target.value;
    this.setState({user: e.target.value});
  },
  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var attributes = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dob: this.state.dob,
      sport: this.state.sport
    };
    UserActions.updateUserProfile(attributes);
    UserActions.loadUser();
  },
   render: function() {
      return (
         <div className="task-content">


          <div className="profile-view-wrapper">

          <div className="profile-header">
            <h2>Profile</h2>
          </div>
               <div className="profile-left">
                <img src='/assets/images/check.png' className="profile-img" />
               </div>
               <div className="profile-right">
                 <div className="title">
                    <p>{this.state.user.first_name}</p>
                    <p>{this.state.user.last_name}</p>
                    <p>{this.state.user.dob}</p>
                    <p>{this.state.user.sport}</p>
                 </div>
              </div>
          </div>

          <form className="profile-form" onSubmit={this._onSubmit}>
            <label>First Name</label>

            <input type="text" 
                   value={this.state.user.first_name} 
                   name="first_name" 
                   onChange={this._handleChange} />

            <label>Last Name</label>
            <input type="text" 
                   value={this.state.last_name} 
                   name="last_name"
                   onChange={this._handleChange} />

            <label>Date of birth</label>
            <input type="date" 
                   value={this.state.dob} 
                   name="dob"
                   onChange={this._handleChange} />

            <label>Sport</label>
            <input type="text" 
                   value={this.state.sport} 
                   name="sport"
                   onChange={this._handleChange} />

            <button type="submit" className="completed-btn">Update</button>
         </form>

         </div>
      );
   }

});

module.exports = Profile;