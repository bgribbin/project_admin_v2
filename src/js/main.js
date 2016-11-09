var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, Router.HistoryLocation, function(Root){
  React.render(<Root />, document.getElementById('main'));
});
