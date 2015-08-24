var React = require('react');
var Router = require('react-router');
var Menu_item = require('../components/menu_item.js');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/session_actions.js');



var SideNav = React.createClass({
  
  propTypes: {
  	isLoggedIn: ReactPropTypes.bool,
  	email: ReactPropTypes.string,

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
         <Menu_item name={"CV"} link_to={ "cv" } />
         <Menu_item name={"Sat"} link_to={ "sat" } />
         <Menu_item name={"Eligability"} link_to={ "eligability" } />
         <Menu_item name={"Insurance"} link_to={ "insurance" } />
         <Menu_item name={"Visa"} link_to={ "visa" } />
         <Menu_item name={"Profile"} link_to={ "profile" } />
        <Menu_item name={"Video"} link_to={ "video" } />
      </ul>
    ) : (
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
            <Link to="login" className="pure-menu-link">Login</Link>
        </li>
      </ul>
    );

    return (

      <div id="layout">
        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Future Elite Sports</a>
                {rightNav}
            </div>
        </div>
      </div>   

    )
  }
});

module.exports = SideNav;