var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var State = Router.State;


var Menu_item = React.createClass({
  mixins: [State],
  
  render: function(){

    var isActive = this.isActive(this.props.link_to);
  	var className = isActive ? 'pure-menu-item pure-menu-selected' : 'pure-menu-item';
    var isComplete = this.props.completed.toString();
    return (
      <li className={className}>
      	<Link to={this.props.link_to} className="pure-menu-link">
          {this.props.name} 
          <span className={isComplete}></span>
        </Link>
        
      </li>

    )
  }
});

module.exports = Menu_item;