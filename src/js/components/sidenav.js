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
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <a href="#" className="pure-menu-link">{this.props.email}</a>
        </li> 
        <li className="pure-menu-item">
          <a href='#' className="pure-menu-link" onClick={this.logout}>Logout</a>
        </li>
        
      </ul>
    ) : (
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
            <Link to="login" className="pure-menu-link">Login</Link>
        </li>
      </ul>
    );

    var leftNav = this.props.isLoggedIn ? (
      <div></div>
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
            <a className="pure-menu-heading" href="#">Future Elite Sports</a>
            {leftNav}
            {rightNav}
            <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link to="about" className="pure-menu-link">About</Link></li>


                <li className="pure-menu-item pure-menu-selected">
                    <Link to="profile" className="pure-menu-link">Profile</Link>
                </li>

                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
            </ul>
            
        </div>
    </div>

    </div>

          

    )
  }
});

module.exports = SideNav;