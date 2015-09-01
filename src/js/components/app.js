var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SideNav = require('../components/SideNav.js');
var SessionStore = require('../stores/session_store.js');
// var RouteStore = require('../stores/RouteStore.react.jsx');

function getStateFromStores() {
  return {
    isLoggedIn: SessionStore.isLoggedIn(),
    email: SessionStore.getEmail()
  };
}

var App = React.createClass({

	getInitialState: function() {
    return getStateFromStores();
  },
  
  componentDidMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  render: function() {
    return (
      <div className="main-content">
        <SideNav 
          isLoggedIn={this.state.isLoggedIn}
          email={this.state.email} />
   	 		<RouteHandler />   
      </div>
    );
  }

});

module.exports = App;