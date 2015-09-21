var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/session_actions.js');
var Login = require('../components/login.js')



var Main = React.createClass({
  
  propTypes: {
  	isLoggedIn: ReactPropTypes.bool,
  	email: ReactPropTypes.string
  },

  logout: function(e) {
  	e.preventDefault();
  	SessionActionCreators.logout();
  },

  render: function () {

    return (

    <div id="main2">
        <div className="header">
            <h1>Athlete Admin Center</h1>
            <h2>Welcome to Future Elite Sports</h2>
            <Login />
        </div>
    </div>
   

          

    )
  }
});

module.exports = Main;