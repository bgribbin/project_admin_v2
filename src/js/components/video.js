var React = require('react');
var Completed_form = require('../components/completed_form.js');

var Video = React.createClass({
  render: function(){
    return (

      <div className="task-content">
         <div className="title">
            <h1>Video footage</h1>
         </div>
         <div className="task-text">
        <p>Video footage makes up a large section of your profile. 
        The sooner you can gather footage or register for a video day,
         the sooner we can get you speaking with coaches. 
         It's important to spend time collecting quality footage as it
         can be the difference between a 50% and a 75% scholarship offer.</p>
         </div>
        
      </div>
      <Completed_form task={"video"} />
    )
  }
});

module.exports = Video;