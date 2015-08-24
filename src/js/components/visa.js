var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

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
         <div className="profile">

         <h2>VISA Registration Steps</h2>

<p>1) Click on the link below. This will open up an online PDF that provides you with information when booking the exam.  VISA Process (please click)</p>

<p>2) The first form you will need to fill in is the DS-160. Please ensure that the information on your I20 matches with the information that is entered on the form.  https://ceac.state.gov/genniv/</p>

<p>After clicking on the link, please follow the process and guidance for each of the below steps: </p>

<p>1. Select Location - 'England' 2. Click - 'Start An Application'</p>

<p>Info on photo requirements - http://www.slideshare.net/USAinUK/ds160-visa-photo-requirements</p>

<p>3) Once you have paid and completed this form you can (CREATE AN ACCOUNT, PAY VISA FEE, SCHEDULE APPOINTMENT, &amp; ARRANGE FOR THE RETURN OF YOUR PASSPORT) Please choose the non-immigrant visa. https://ais.usvisa-info.com/en-gb/niv</p>

<p>After creating your account, please follow the process and guidance for each of the below steps: </p>

<p>1. Provide your DS-160 number;  2. Determine your visa type; (F1) 3. Select a courier return location**; 4. Pay your U.S. visa fee via debit card (Visa or Mastercard);  5. Schedule an appointment;  6. Select and pay the optional home delivery document option for each applicant (&pound;18.00 per applicant) by credit or debit card.</p>

<p>4) Once you have booked your appointment you will need to complete the Sevis I-901 form.  https://www.fmjfee.com/i901fee/desktop/index.jsp?view=desktop 1. Click 'Submit I-901 and fee payment' 2. Click form I20 3. Fill in information  </p>

<p>5) Please see the bottom section of the online PDF for a list of documents you will need to bring on the day and this embassy checklist. http://photos.state.gov/libraries/unitedkingdom/164203/cons-visa/appointment_letter_fm.pdf</p>

<p>6) Please call your Future Elite Sports rep once you have confirmed your appointment. Your rep will then go through the interview process/list of common asked questions in preparation for the day.</p>

<p>7) Contact your Future Elite Sports rep if you have any problems completing the forms.</p>

<p>Useful Links - The link below explains in greater detail what you can expect on the day of your interview and how to be best prepared. VISA Process (Please click)</p>

<p>- You will be asked a series of questions about why you want to study in the USA. The link below discussed the type of questions you will face in the day. Examples of Visa Questions (Please Click)</p>

         </div>
      );
   }

});

module.exports = Visa;