var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/session_actions.js');
var Login = require('../components/login.js');
var SessionStore = require('../stores/session_store');

function getStateFromStores() {
  return {
    isLoggedIn: SessionStore.isLoggedIn()
  };
}

var Main = React.createClass({

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

  render: function () {

    var loggedok = (
      <div>
         <div className="header">
             <h1>Athlete Admin Center</h1>
             <h2>Welcome to Future Elite Sports</h2>
             <br/>
          </div>
               <div className="welcome row col-f-12">
               <div className="col-9 col-centered">
               <p className="comp-wel-para">
               Firstly, on behalf of everyone at Future Elite Sports, Welcome!
               </p>
               <p className="comp-wel-para">
               Everyone at Future Elite Sports has been through this process before and therefore understands how big a decision it is to leave friends and family in pursuit of your sporting and academic dreams. We will be with you before, during and after - supporting you throughout your time in the USA.
                  </p>
               <p className="comp-wel-para">
               The Athlete Admin Centre will help guide you through the entire process of gaining a scholarship to an American University. The process is split into seven tasks, each task needs to be completed in order for you to be ready to begin your new life in America.
              </p>
               <p className="comp-wel-para">
               Please ensure that you read all of the information for each task and watch any video links, these are here to help you. At the bottom of each page you will also find helpful links that will help guide you through that particular task. If you are unsure about a task, just give us a call and we will help guide you through it.
                </p>
               <p className="comp-wel-para">
               Finally we wish you all the best in this exciting period of your life. Take advantage of every opportunity you get offered in the USA, it’s a once in a lifetime opportunity. You’ve already invested time, hard work and discipline to get to where you are now, but it’s also important to stress that the hard work starts today!
                 </p>
               </div>
               </div>
      </div>
    );

    var loggedno = (
      <div>
        <div className="header">
            <h1>Athlete Admin Center</h1>
            <h2>Welcome to Future Elite Sports</h2>
            <Login />
        </div>
      </div>
    );

    var homeScreen = this.state.isLoggedIn ? (
      {loggedok}
    ) : (
      {loggedno}
    );
    return (
    <div className="task-content">{homeScreen}</div>
    );
  }
});

module.exports = Main;
