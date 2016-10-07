var React = require('react');
var Main = require('../components/main');
var HomePage = require('../components/home');
var VideoPage = require('../components/video');
var ProfilePage = require('../components/profile');
var SatPage = require('../components/sat');
var CVPage = require('../components/cv');
var CoachPage = require('../components/coach');
var EligabilityPage = require('../components/eligability');
var NcaaPage = require('../components/ncaa');
var VisaPage = require('../components/visa');
var App = require('../components/app');
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
    <Route name="coach" path="/coach" handler={CoachPage} />
    <Route name="eligability" path="/eligability" handler={EligabilityPage} />
    <Route name="ncaa" path="/ncaa" handler={NcaaPage} />
    <Route name="visa" path="/visa" handler={VisaPage} />
    <Route name="about" path="/about" handler={HomePage} />
    <Route name="login" path="/login" handler={LoginPage} />
    <Route name="video" path="/video" handler={VideoPage} />
  </Route>
);
