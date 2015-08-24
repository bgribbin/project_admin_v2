var React = require('react');
var Main = require('../components/main');
var HomePage = require('../components/home');
var VideoPage = require('../components/video');
var ProfilePage = require('../components/profile');
var SatPage = require('../components/sat');
var CVPage = require('../components/cv');
var InsurancePage = require('../components/insurance');
var EligabilityPage = require('../components/eligability');
var VisaPage = require('../components/visa');
var App = require('../components/App');
var LoginPage = require('../components/login');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (

  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Main} />
    <Route name="profile" path="/profile" handler={ProfilePage} />
    <Route name="sat" path="/sat" handler={SatPage} />
    <Route name="cv" path="/cv" handler={CVPage} />
    <Route name="insurance" path="/insurance" handler={InsurancePage} />
    <Route name="eligability" path="/eligability" handler={EligabilityPage} />
    <Route name="visa" path="/visa" handler={VisaPage} />
    <Route name="about" path="/about" handler={HomePage} />
    <Route name="login" path="/login" handler={LoginPage} />
    <Route name="video" path="/video" handler={VideoPage} />
  </Route>
);