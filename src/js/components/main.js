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

    var loggedok = (<div>
         <div className="header">
             <h1>Athlete Admin Center</h1>
             <h2>Welcome to Future Elite Sports</h2>
             <div>
               <div className="task-welcome">
               <p>Firstly I’d like to say welcome on board the Future Elite Scholarship Programme. 
               We are extremely excited to be involved in the next stage of your career.</p>
               <p>
               Everyone at Future Elite Sports has been through the US Scholarship process before and therefore understands how big a decision it is to leave friends and family in pursuit of your sporting and academic dreams. We will be with you before, during and after - supporting you throughout your time in the USA.</p>
               <p>
               We think it’s very important that each Future Elite Sports agent gets to know their clients’ needs in order to make the process as personalized as possible. Each client will be provided with their agent’s mobile number in order to contact them when they are out of the office - whether it’s advice on insurance, making that all important final decision or just to update them on a recent sporting result. They will be with you every step of the way.</p>
               <p>
               The process is fun and exciting and will become more real the further down the recruitment process you get.</p>
               <p>
               Finally we wish you all the best in this exciting period of your life. Take advantage of every opportunity you get offered in the USA, it’s a once in a lifetime opportunity that not everyone can boast to have done. You’ve already invested time, hard work and discipline to get where you’re now but it’s also important to stress the hard work starts today.</p>
               <p>
               I have attached a brief outline on the scholarship process, along with a CV template and a receipt for your payment.</p>
               </div>
              </div>
         </div>
      </div>);

    var loggedno = (<div>
        <div className="header">
            <h1>Athlete Admin Center</h1>
            <h2>Welcome to Future Elite Sports</h2>
            <Login />
        </div>
      </div>);

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