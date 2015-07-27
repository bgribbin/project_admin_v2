var React = require('react');
var Main = require('../components/main');
var HomePage = require('../components/home');
var VideoPage = require('../components/video');
var ProfilePage = require('../components/profile');
var App = require('../components/App');
var LoginPage = require('../components/login');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (

  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Main} />
    <Route name="profile" path="/profile" handler={ProfilePage} />
    <Route name="about" path="/about" handler={HomePage} />
    <Route name="login" path="/login" handler={LoginPage} />
    <Route name="video" path="/video" handler={VideoPage} />
  </Route>
);