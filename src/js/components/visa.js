var React = require('react');
var UserActions = require('../actions/user_actions.js');
var UserStore = require('../stores/user_store.js');

var PageActions = require('../actions/page_actions.js');
var PageStore = require('../stores/page_store.js');

var Completed_form = require('../components/completed_form.js');

var Visa = React.createClass({

  getInitialState: function() {
   return {
     user: UserStore.getUser(),
     errors: [],
     page: PageStore.getPage(),
   };
 },


   componentDidMount: function() {
     UserStore.addChangeListener(this._onChange);
     UserActions.loadUser();

     PageStore.addChangeListener(this._onChange);
     PageActions.receivePage(6);
   },

   componentWillUnmount: function() {
     UserStore.removeChangeListener(this._onChange);
   },

   _onChange: function() {
     this.setState({
       user: UserStore.getUser(),
       errors: UserStore.getErrors(),
       page: PageStore.getPage(),
     });
  },
   render: function() {
      return (
        <div>
         <div className="task-content">
           <div className="title">
              <h1>Visa</h1>
           </div>

           <div className="content" dangerouslySetInnerHTML={{__html: this.state.page.body}}></div>

          </div>
          <Completed_form task={"visa"} />
         </div>

      );
   }
});

module.exports = Visa;
