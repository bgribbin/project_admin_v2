var React = require('react');
var Router = require('react-router');
var Menu_item = require('../components/menu_item.js');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/session_actions.js');
var UserStore = require('../stores/user_store');

function getStateFromStores() {
  return {
    user: UserStore.getUser()
  };
}

var SideNav = React.createClass({
  
  propTypes: {
  	isLoggedIn: ReactPropTypes.bool,
  	email: ReactPropTypes.string,

  },

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  logout: function(e) {
  	e.preventDefault();
  	SessionActionCreators.logout();
  },

  render: function () {

  	var rightNav = this.props.isLoggedIn ? (
      <div>
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <a href="#" className="pure-menu-link">{this.props.email}</a>
        </li> 
        <li className="pure-menu-item">
          <a href='#' className="pure-menu-link" onClick={this.logout}>Logout</a>
        </li>
      </ul>
      <ul className="pure-menu-list nav-tasks">
         <li className="pure-menu-heading">Tasks</li>
         <Menu_item name={"CV"} link_to={"cv"} completed={this.state.user.cv_completed} />
         <Menu_item name={"Sat"} link_to={"sat"} completed={this.state.user.sat_completed} />
         <Menu_item name={"Eligability"} link_to={"eligability"} completed={this.state.user.eligability_completed} />
         <Menu_item name={"Insurance"} link_to={"insurance"} completed={this.state.user.insurance_completed} />
         <Menu_item name={"Visa"} link_to={"visa"} completed={this.state.user.visa_completed} />
         <Menu_item name={"Profile"} link_to={"profile"} completed={this.state.user.sat_completed} />
        <Menu_item name={"Video"} link_to={"video"} completed={this.state.user.video_completed} />
      </ul>
      </div>
    ) : (
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
            <Link to="login" className="pure-menu-link">Login</Link>
        </li>
      </ul>
    );

    return (


        <div id="side-navbar">
            <div className="pure-menu">

                <div className="nav_header">
                <a className="pure-menu-heading" href="#">Future Elite Sports</a>
                </div>
                {rightNav}
            </div>
        </div>
  

    )
  }
});

module.exports = SideNav;