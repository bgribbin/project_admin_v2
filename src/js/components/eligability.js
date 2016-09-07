var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');
var Completed_form = require('../components/completed_form.js');

var Eligability = React.createClass({

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
             <h1>NCAA Registration</h1>
           </div>
             <div className="task-text">
               The Eligibility Centre is something that all students that wish to study out in America have to complete in order to be deemed to be of ‘amateur’ status. Follow the steps on this page and if youb have any questions, please contact your FES rep.
               <br />
               <br />
               <a href="http://content.yudu.com/Library/A3b7zp/registeringwiththeNC/resources/index.htm?referrerUrl=http%3A%2F%2Ffree.yudu.com%2Fitem%2Fdetails%2F2631544%2Fregistering-with-the-NCAA" target="_blank">
              Please click on the online PDF</a> to use as a reference point throughout the registration process

               <br />
               <br />
               1) Click on the link below. This will open up the NCAA eligibility centre website. Once you have then opened the link, click on the 'NCAA College Bound Athletes' tab
   <a href="http://web3.ncaa.org/ECWR2/NCAA_EMS/NCAA.jsp"> (please click)</a>
             <br />
             <br />
              2) You will be brought to the 'Eligibility Home Page'  Please click 'New Account' in the top right hand corner and create an account. Please then enter your 'Verification Code' and complete your basic information
              <br />
              <br />
              3) After you have completed your basic information you will need to complete the 'General Coursework Section'
              <br />

              1. In this section you will need to enter every year you have attended school and college.
              2. Please remember the term 'college' in the UK will be categorised as 'high school' in the USA. The USA refers to College as university. When entering information on your time at college, please refer to it as high school.
              3. From Y7 - Y9 please select     'Lower Secondary'
              4. From Y9 - Y13 Please select  'Upper Secondary'
              <br />
              4) After you have completed your academic information you will need to complete the  'My Sports' section
              <br />
              <br />
              1 Expenses - Please speak to your FES rep when answering this question.<br />
              2. Training Expenses - Please check the box and select 'No'<br />
              3. Athletic Contacts - It's always best to select 'No' to whether you have given permission for anyone to market your skills. This will reduce the amount of paperwork later on.<br />
              4. Teams/Clubs - When entering club information, please include age groups.
              E.G Date 2010 - Jun 2011 - Cardiff City U13's youth team.<br />
              5. Please enter 'No' to 'Does your club consider it to be professional'<br />
              6. All youth team football should be classed as 'Amateur'<br />
              7. Please speak with your FES rep if you have any questions about the NCAA process.<br />
              <br />
              <br />
              5) Registration
               Once your FES rep has checked all the forms please go ahead and finalise the registration payment. After you have completed the registration process you will set a list of tasks that will need to be completed. Please see the links below for details on these.

                <br />
                <br />
            </div>

            <div className="title">
            <h1>NAIA Registration</h1>
          </div>
            <div className="task-text">
              NAIA Registration

‘The Eligibility centre is an online form that all students that wish to attend a ‘4 YEAR’ University programme. Please note YOU ARE NOT REQUIRED to complete these sections if you are going to attend a ‘2 year university.
<br />
<br />
1) Please click on the link below. This will then bring up the NAIA Eligibility Centre details.
 <a href="http://www.playnaia.org">(Click here)</a>
 <br />
 <br />
2) Click ‘Register' on the top bar<br />
3) Fill in the athlete profile questions about yourself<br />
4) Once you have confirmed your profile you will be able to log in via the top right corner<br />
5) Please then fill in the about me page. NB. Please do not worry about a social security number as you won’t have one.<br />
6) You will then be able to complete payment and confirm registration. <br />
7) You will then be asked to complete sections about the secondary schools you have attended and the teams you have played for.
NB: Please speak to your Future Elite Sports Rep before answering any questions regarding your chosen sport.<br />
<br />
Once registration is complete you will need to become NAIA eligible and meet two of the following three criteria once you graduate high school. (Your Future Elite Agent will explain which two requirements you will be working towards)
<br />
Am I NAIA eligible?
<br />
1 - Achieve a minimum of 18 on the ACT or 860 on the SAT<br />
2 - Achieve a minimum high school GPA of 2.0 on a 4.0 scale.<br />
3 - Graduate in the top half of your class. To meet this requirement, the headmaster or deputy must write a a letter on school paper stating your high school graduation placement based on cumulative grades and the total number of students in your class (Please see example letter attached)<br />

<br />
Sending your Academic transcripts/records<br />
<br />
During the NAIA process you will asked to send across your international records (Academic results) . Please follow the simple steps below
<br />
- Please send official copies of GCSE, AS - Level, A - Level and BTEC certificates to the NAIA Eligibility Center<br />
- All copies of the documents will need to be colour photocopied and stamped using the high school/college stamp (To prove they are official) <br />
- Academic records must then be placed in a school envelope and then the envelope must be stamped and sealed.<br />
- Documents can then be mailed by registered mail to NAIA Eligibility Center, Transcripts, 1200 Grand Boulevard, Suite 100, Kansas City, MO 64106, USA<br />
- Include a document cover page identifying your name and ECID# when sending the records.<br />
<br />
Sending a class rank letter.<br />
<br />
You MUST answer yes to each of these questions below to ensure that your class rank letter is sent properly:<br />
<br />
	• Is the letter being sent directly from the secondary school or is it being placed in a school envelope and sealed/signed by the school official before you or someone else puts it in the mail?<br />
	• Does the letter include contact information from the author and is the letter written on school letterhead?<br />
	• Is the letter written by the Headmaster, Principal, Director, Deputy Principal, Vice Principal or Head Grades Administrator (not the secretary, administrator or teacher) and originally signed?<br />
	• Does the letter include the student's numerical placement out of the total number of students in the graduating cohort?<br />
	• Is your class rank letter accompanied by the Class Rank Cover Letter and signed by the letter's author?<br />


             <div className="task-video">
              <iframe width="420" height="315" className="youtube"
                src="https://www.youtube.com/embed/T5cwzGHuHB8">
              </iframe>
             </div>


            </div>
            </div>
            <Completed_form task={"eligability"} />
        </div>
      );
   }

});

module.exports = Eligability;
