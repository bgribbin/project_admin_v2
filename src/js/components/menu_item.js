var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var State = Router.State;

var Menu_item = React.createClass({
  mixins: [State],
  getInitialState: function() {
  	return null;
  },

  // handleClick: function(event) {
  // 	// event.preventDefault();
  // 	// console.log(this.props.key1);
  // 	this.props.onSelect(this.props.key1);
  // },
  
  render: function(){
    var isActive = this.isActive(this.props.link_to);
  	var className = isActive ? 'pure-menu-item pure-menu-selected' : 'pure-menu-item';
  	// console.log(this.props.link_to);
    
    // console.log(isActive);
    return (
      <li className={className}>
      	<Link to={this.props.link_to} className="pure-menu-link">{this.props.name}</Link>
      </li>
    )
  }
});

module.exports = Menu_item;