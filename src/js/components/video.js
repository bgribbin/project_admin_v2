var React = require('react');
var Completed_form = require('../components/completed_form.js');

var Video = React.createClass({
  render: function(){
    return (

      <div className="task-content">
         <div className="title">
            <h2 className="">Video footage</h2>
         </div>
        <p>Video footage makes up a large section of your profile. 
        The sooner you can gather footage or register for a video day,
         the sooner we can get you speaking with coaches. 
         It's important to spend time collecting quality footage as it
         can be the difference between a 50% and a 75% scholarship offer.</p>

        <Completed_form task={"video"} />
      </div>
    )
  }
});

module.exports = Video;