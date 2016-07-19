var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');
var Completed_form = require('../components/completed_form.js');

var Visa = React.createClass({

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
      return (
        <div>
         <div className="task-content">
           <div className="title">
              <h1>Visa</h1>
           </div>
           <div className="task-text">
         <h3 className=""><span className="s1"><em>The F-1 Student Visa<br /></em></span></h3><br />
          <p className="p1"><span className="s2">There are 3 steps in the visa process, however before beginning please ensure that you have received your form I-20&nbsp;from the university you will be attending before you start.&nbsp;Please check your Form I-20 against your passport information to make sure that your name and date of birth (DOB) are&nbsp;correctly listed and spelled.</span></p>
          <p className="p2">&nbsp;</p>
          <p className="p1"><span className="s2">Once these steps have been completed, please view each PDF as&nbsp;they provide information on what you need to take,&nbsp;examples of questions you may be asked &amp; what you can expect on the day.</span></p>
          <p className="p2">&nbsp;</p>

            <div className="task-video">
             <iframe width="420" height="315" className="youtube" frameborder="0" allowfullscreen
               src="https://www.youtube.com/embed/FmtiX7v4SGs">
             </iframe>
           </div>


          <h3 className=""><span className="s2">Step 1 - SEVIS Fee</span></h3><br />
          <ol className="ol1">
          <li className="li1"><span className="s2">Once you have your Form I-20 you are ready for the first step &ndash; paying your I-901 SEVIS Fee.</span></li>
          <p className="p1"><span className="s2">The SEVIS I-901&nbsp;Fee costs ($200.00).&nbsp;</span></p>
          <p className="p1"><span className="s4">This is the website to pay the SEVIS - I-901</span><span className="s5">&nbsp;</span><span className="s6">&nbsp;<a href="https://fmjfee.com/i901fee/desktop/index.jsp?view=desktop"><span className="s7">https://fmjfee.com/i901fee/desktop/index.jsp?view=desktop</span></a></span></p>
          <p className="p1"><span className="s2">Please follow the link and click&nbsp;</span><span className="s1"><em>&lsquo;Submit Form 1-901 and Fee Payment'</em></span><span className="s2">&nbsp;and then click&nbsp;</span><span className="s1"><em>&lsquo;Form I-20&rsquo;.&nbsp;</em></span></p>
          <p className="p1"><span className="s2">You will then be required to fill in your information, along with the SEVIS I-20 number (This can be found on your I20 document)</span></p>
          <p className="p1"><span className="s2">&nbsp;Once you have completed and paid for your SEVIS 1-901 Form you can move onto Step 2</span></p><br /><br />
          </ol>
          <h3 className=""><span className="s1">Step 2 - DS-160 Form</span></h3>
          <p className="p2">&nbsp;</p>
          <p className="p1"><span className="s2">Complete the Online Visa Application - This form is know as the DS - 160. This is the website to complete the application form&nbsp;</span></p>
          <p className="p4"><span className="s1"><a href="https://ceac.state.gov/genniv/">https://ceac.state.gov/genniv/</a></span></p>
          <p className="p2">&nbsp;</p>
          <p className="p1"><span className="s2">To start you will need to select your location - England</span></p>
          <p className="p1"><span className="s2">&nbsp;Click &lsquo;Start an Application&rsquo;</span></p>
          <p className="p1"><span className="s1"><em>When completing the form please tick &lsquo;Does not apply&rsquo; for any US based questions. e.g. Do you have a social security number?</em></span></p>
          <ol className="ol1">
          <p className="p1"><span className="s2">The first section of questions will be about yourself.&nbsp;When asked what the&nbsp;</span><span className="s1"><em>&lsquo;Purpose of the Trip to the US is&rsquo;</em></span><span className="s2">&nbsp; Please select &nbsp;</span><span className="s1"><em>&lsquo;Academic/Language student&rsquo; (F) and then &lsquo;Student&rsquo;</em></span></p>
          <p className="p1"><span className="s2">You will then be asked when you intend to arrive and the length of time intended to stay in the USA. Please only select the amount of years your course if for e.g. &lsquo;4&rsquo; Years or &lsquo;2&rsquo; years.</span></p>
          <p className="p1"><span className="s2">US Point of contact (You can add the head coach who has recruited you and the university)</span></p>
          <p className="p1"><span className="s2">You will now be required to enter your parents information.</span></p>
          <p className="p1"><span className="s2">'Present Work&rsquo; - Please select Student and enter your school and any PT work you have taken part in.</span></p>
          <p className="p1"><span className="s2">You will now be asked a series of &lsquo;Yes&rsquo; and &lsquo;No&rsquo; security questions.</span></p>
          <p className="p1"><span className="s2">&lsquo;Additional Point of Contact&rsquo; - Feel free to enter your Future Elite Rep for this question.</span></p>
          <p className="p1"><span className="s2">Please enter your 'Sevis Number' and the address of the university you will be attending (You will have received this when you paid for the SEVIS I-901 earlier) SEE TOP OF EMAIL.</span></p>
          <p className="p1"><span className="s2">Photo - Please follow the guidelines and upload a photo. If you are struggling to upload an approved photo you will need to bring a 5CM X 5CM passport photo to the interview.</span></p>
          <p className="p1"><span className="s2">Review all the information and submit</span></p>
          </ol><br /><br />
          <h3 className=""><span className="s2">Step 3) Schedule and prepare&nbsp;of your interview &nbsp;</span></h3><br />
          <p className="p1"><span className="s2">Wait times for interview appointments vary by location, season, and visa category, so you should apply for your visa as early as possible.&nbsp;&nbsp; An F-1 student visa for the USA can be issued up to 120 days in advance of your course of study start date. You will only be able to enter the US with an F-1 visa 30 days before your start date.</span></p>
          <p className="p1"><span className="s2">The cost of booking your VISA appointment is $160.00. The website below is the website required to book your appointment&nbsp;</span></p>
          <p className="p4"><span className="s1"><a href="https://ais.usvisa-info.com/">https://ais.usvisa-info.com</a></span></p>
          <ol className="ol1">
          <p className="p1"><span className="s2">Select &lsquo;Nonimmigrant Visa Application&rsquo;</span></p>
          <p className="p1"><span className="s2">Select &lsquo;United Kingdom&rsquo;</span></p>
          <p className="p1"><span className="s2">Select &lsquo;Apply&rsquo; and tick &lsquo; I have completed the U.S Nonimmigrant Visa Application (DS-160)</span></p>
          <p className="p1"><span className="s2">You will hen be asked to fill in &nbsp;information form your DS - 160</span></p>
          <p className="p1"><span className="s2">Select where you would like to pick your passport up from (Once it&rsquo;s been issued)</span></p>
          <p className="p1"><span className="s2">&nbsp;Pay $160 Fee</span></p>
          <p className="p1"><span className="s2">&nbsp;Schedule appointment</span></p><br />
          </ol>

          <div>
            <h3>Visa PDF attachments for reference</h3>
            <a href="/assets/expect_on_the_day.pdf" download="/assets/expect_on_the_day.pdf">What to expect on the day</a><br />
            <a href="/assets/visa_questions.pdf" download="/assets/visa_questions.pdf">Visa interview questions</a><br />
            <a href="/assets/booking_your_appointment.pdf" download="/assets/booking_your_appointment.pdf">Booking your appointment</a><br />
          </div>

            </div>


          </div>
          <Completed_form task={"visa"} />
         </div>

      );
   }
});

module.exports = Visa;
