var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var APIRoot = "http://localhost:3000";

var Profile = React.createClass({

   getInitialState: function() {
      var user = UserStore.getUser();
      console.log('user:');
      console.log(user);
      UserStore.addChangeListener(this._onChange);
    return { 
      user: user, 
      errors: [],
      first_name: user.first_name,
      last_name: user.last_name,
      dob: user.dob,
      sport: user.first_name,
      avatar_url: user.avatar_url,
      data_uri: null
    };
  },
 
  componentDidMount: function() {
    UserActions.loadUser();
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    var user = UserStore.getUser();
    this.setState({ 
      user: user, 
      errors: [],
      first_name: user.first_name,
      last_name: user.last_name,
      dob: user.dob,
      sport: user.sport,
      avatar_url: user.avatar_url
    }); 
  },
  _handleChange: function(e) {

    var state = {}
    console.log(e.target.name);

    state[e.target.name] =  e.target.value;

    console.log(state);
    this.setState(state);
    console.log(this.state);
  },
  _handleFile: function(e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
      self.setState({
        data_uri: upload.target.result,
      });
    }

    reader.readAsDataURL(file);
  },
  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var attributes = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dob: this.state.dob,
      sport: this.state.sport,
      avatar: this.state.data_uri
    };
    console.log('attributes:');
    console.log(attributes);
    UserActions.updateUserProfile(attributes);
    UserActions.loadUser();
  },
   render: function() {
      return (


          <div className="profile-view-wrapper row col-f-6">

          <div className="profile-header col-12">
            <h2>Profile</h2>
          </div>
               
               <div className="profile-left col-12">

                <img src={ APIRoot + this.state.avatar_url} className="profile-img" />
               </div>

          <form className="profile-form col-12" onSubmit={this._onSubmit}>
            

            <div className="form-dob col-12">
            <label>Profile Image</label>
              <input type="file"
                     name="avatar"
                     onChange={this._handleFile} />
            </div>
            <div className="form-name col-6">
              <label>First Name</label>

              <input type="text" 
                     value={this.state.first_name} 
                     name="first_name" 
                     onChange={this._handleChange} />
            </div>

            <div className="form-name col-6">
            <label>Last Name</label>
            <input type="text" 
                   value={this.state.last_name} 
                   name="last_name"
                   onChange={this._handleChange} />
         
         
            </div>
            <div className="form-dob col-12">
            <label>Date of birth</label>
            <input type="date" 
                   value={this.state.dob} 
                   name="dob"
                   onChange={this._handleChange} />
            </div>

            <div className="form-sport col-12">
            <label>Sport</label>
            <input type="text" 
                   value={this.state.sport} 
                   name="sport"
                   onChange={this._handleChange} />
            </div>

            <button className="std-btn">Update</button>
         </form>
          </div>

      );
   }

});

module.exports = Profile;