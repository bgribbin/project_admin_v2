var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var App = require('../components/App');
var LoginPage = require('../components/Login');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Main} />
    <Route name="about" path="/about" handler={Home} />
    <Route name="login" path="/login" handler={LoginPage} />
  </Route>
);