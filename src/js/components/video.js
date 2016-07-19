var React = require('react');
var Completed_form = require('../components/completed_form.js');

var Video = React.createClass({
  render: function(){
    return (
      <div>
        <div className="task-content">
           <div className="title">
              <h1>Video footage</h1>
           </div>
           <div className="task-text">
              <p>We hold ‘Video Days’ throughout the year, however it is important that coaches are able to view you playing in your own surroundings, in fixtures that are competitive.
              We like our athletes to get at least 2 games worth of footage which we can then add to our video day footage.</p>
            <br />
            <p>For help on how to obtain good footage, Please look through the
              <a className="" href="assets/video.pdf" download="/assets/video.pdf"> attached PDF </a>
              throughly and have a look at an example video.
            </p>
          <br />
          <div className="task-video">
           <iframe width="420" height="315" className="youtube"
             src="https://www.youtube.com/embed/zxPi5GUggLE">
           </iframe>
         </div>

         <div className="task-upload">
            <button className="std-btn upload-btn">
              <a className="btn-a" href="https://www.dropbox.com/request/IKubpsr2DT0uaGyekhBW">Upload your video</a>
            </button>
         </div>

        </div>
        <Completed_form task="video" />
      </div>
    </div>
    )
  }
});

module.exports = Video;
