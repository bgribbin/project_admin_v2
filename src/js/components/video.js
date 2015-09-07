var React = require('react');
var Completed_form = require('../components/completed_form.js');

var Video = React.createClass({
  render: function(){
    return (
      <h2 className="">
        This is the video page
        <Completed_form task={"video"} />
      </h2>
    )
  }
});

module.exports = Video;