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
      var checked = isChecked ? 'checked' : '';
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
            Before booking onto the SAT exam please read through the attached PDF document throughly & watch the video link.
          </p>

            <br />
            <div className="task-video">
             <iframe width="420" height="315" className="youtube"
               src="https://www.youtube.com/embed/WDYyFqdOIso">
             </iframe>
            </div>

            <h2>SAT Registration Steps</h2>

          <p>  1) The College board website can be found at  https://collegereadiness.collegeboard.org/sat (This is the website where you will book your SAT exam)</p><br />

  <p>2) Click on the link and create a college board profile.</p><br />

  <p>3) You will be asked a series of questions about yourself, your academic background, what you want to study etc. Please don't overly worry about these questions as they are for marketing purposes.</p><br />

  <p>4) Please refer to the online PDF (Bottom half) for any questions/terms you don't understand.</p><br />

  <p>5) Once you have answered all the questions you will be able to book the SAT exam. The exam you need to register for is the standard SAT exam. (Please don’t register for the subject tests/essay exams unless instructed)</p><br />

  <p>A series of test dates/locations will then be displayed. SAT exams run in October/November/December - NB The FES revision days will start in September.</p><br />

  <p>6)  Please remember to request your scores to be sent to the NCAA/NAIA once you have paid the SAT fee. You can do this by using the code 9999 for the NCAA or 9876 for the NAIA</p><br />

  <p>7) Please contact your Future Elite Sports rep once you have booked onto the exam or if you have any questions throughout.</p><br />


    <h3>Useful Links</h3>
  <p>Below are a few useful links that will help when booking/taking the SAT exam.</p>

  <p>- We recommend booking two SAT exams in the later part of this year. Students always do better on the second attempt and a good score on the SAT can be the difference between getting into the school of your choice or not. </p>

  <p>- Right Click on the link below and follow the link to open up an online PDF which will also help with the registration process.</p>
  <p>- SAT Registration Process (Please Click)</p>

  <p>- Official new SAT revision guide - Please visit www.wordery.com to pick up the ‘Official NEW SAT Guide’ March 2016 and beyond.</p>

  <p>- International Test Dates
  http://sat.collegeboard.org/register/sat-international-dates</p>

<p>- SAT Practice Tests
  http://blog.prepscholar.com/printable-sat-practice-tests-4-free-official-tests</p>

            <p>Please enter your SAT scores in the profile page and then mark as completed here</p><br />

        </div>

         </div>
         <Completed_form task={"sat"} checked={checked} />
       </div>
      );
   }

});

module.exports = Sat;
