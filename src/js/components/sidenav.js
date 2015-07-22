var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/session_actions.js');



var SideNav = React.createClass({
  
  propTypes: {
  	isLoggedIn: ReactPropTypes.bool,
  	email: ReactPropTypes.string
  },

  logout: function(e) {
  	e.preventDefault();
  	SessionActionCreators.logout();
  },

  render: function () {

  	var rightNav = this.props.isLoggedIn ? (
      <ul className="right">
        <li className="has-dropdown">
          <a href="#">{this.props.email}</a>
          <ul className="dropdown">
            <li><a href='#' onClick={this.logout}>Logout</a></li>
          </ul>
        </li> 
      </ul>
    ) : (
      <ul className="right">
        <li><Link to="login">Login</Link></li>
      </ul>
    );

    var leftNav = this.props.isLoggedIn ? (
      <ul className="left">
       <li>we are logged in</li>
      </ul>
    ) : (
      <div></div>
    );

    return (
      <div id="layout">

    <a href="#menu" id="menuLink" className="menu-link">
      
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link to="about" className="pure-menu-link">About</Link></li>


                <li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
                    <a href="#" className="pure-menu-link">Services</a>
                </li>

                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
            </ul>
            {leftNav}
            {rightNav}
        </div>
    </div>

    </div>

          

    )
  }
});

module.exports = SideNav;