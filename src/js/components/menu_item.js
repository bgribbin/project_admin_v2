var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Menu_item = React.createClass({

  getInitialState: function() {
  	return null;
  },

  handleClick: function(event) {
  	// event.preventDefault();
  	console.log(this.props.key1);
  	this.props.onSelect(this.props.key1);
  },
  
  render: function(){
  	var className = this.props.active ? 'pure-menu-item pure-menu-selected' : 'pure-menu-item';
  	console.log(this.props.link_to);
    return (
      <li className={className}>
      	<Link to={this.props.link_to} className="pure-menu-link" onClick={this.handleClick}>{this.props.name}</Link>
      </li>
    )
  }
});

module.exports = Menu_item;