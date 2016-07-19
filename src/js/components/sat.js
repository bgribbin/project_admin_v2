var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');
var Completed_form = require('../components/completed_form.js');

var Sat = React.createClass({

   getInitialState: function() {
    return {
      user: UserStore.getUser(),
      errors: []
    };
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
    UserActions.loadUser();
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      user: UserStore.getUser(),
      errors: UserStore.getErrors()
    });
  },


   render: function() {

      var isChecked = this.state.user.sat_completed;
      var checked = isChecked? 'checked' : '';
      return (
        <div>
         <div className="task-content">
           <div className="title">
            <h1>Test Scores</h1>
           </div>

           <div className="task-text">
           <p>The SAT exam is used to determine the academic level of a student that is applying for College in America. Scoring well on the SAT can make all the difference when speaking to Colleges. The SAT assesses how well you are able to analyse and solve problems and focusses on Maths and English. The current SAT format is multiple choice and takes around 3 hours to finish. Possible scores on the SAT range from 400 to 1600, combining test results from two 800-point sections: Mathematics and Critical reading.
          <br />
          <br />
            Please be aware that when registering for the SAT exam it is important that you register for the SAT Without Essay. Do not register for the essay or any subject tests unless we have told you to do so.
            <br />
            Before booking onto the SAT exam please read through the attached PDF document throughly & watch the video link.</p>

            <br />
            <div className="task-video">
             <iframe width="420" height="315" className="youtube"
               src="https://www.youtube.com/embed/WDYyFqdOIso">
             </iframe>
            </div>

            <p>Please enter your SAT scores in the profile page and then mark as completed here</p>

           </div>

         </div>
         <Completed_form task={"sat"} checked={checked} />
       </div>
      );
   }

});

module.exports = Sat;
