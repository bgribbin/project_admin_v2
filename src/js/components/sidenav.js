var React = require('react');
var Router = require('react-router');
var Menu_item = require('../components/menu_item.js');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/session_actions.js');



var SideNav = React.createClass({
  
  getInitialState: function() {
    return {
      activeMenuItem: '1'
    };
  },
  propTypes: {
  	isLoggedIn: ReactPropTypes.bool,
  	email: ReactPropTypes.string,

  },

  logout: function(e) {
  	e.preventDefault();
  	SessionActionCreators.logout();
  },
  setActiveMenuItem: function(key1) {
    console.log("active changed to" + " " + key1);
    this.setState({activeMenuItem: key1});
    console.log(this.state.activeMenuItem);
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

    return (

      <div id="layout">
        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Future Elite Sports</a>
                {rightNav}
                <ul className="pure-menu-list">
                    <Menu_item active={ this.state.activeMenuItem === "1" } name={"About"} link_to={ "about" }key1={ "1"} onSelect={this.setActiveMenuItem}/>
                    <Menu_item active={ this.state.activeMenuItem === "2" } name={"Profile"} link_to={ "profile" } key1={ "2"} onSelect={this.setActiveMenuItem}/>
                    <Menu_item active={ this.state.activeMenuItem === "3" } name={"Contact"} link_to={ "profile" } key1={ "3" } onSelect={this.setActiveMenuItem}/>
                </ul>
                
            </div>
        </div>
      </div>   

    )
  }
});

module.exports = SideNav;