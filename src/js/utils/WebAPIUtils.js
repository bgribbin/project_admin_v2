var ServerActionCreators = require('../actions/server_actions.js');
var SmallConstants = require('../constants/constants.js');
var request = require('superagent');

function _getErrors(res) {
  var errorMsgs = ["Something went wrong, please try again"];
  if ((json = JSON.parse(res.text))) {
    if (json['errors']) {
      errorMsgs = json['errors'];
    } else if (json['error']) {
      errorMsgs = [json['error']];
    }
  }
  return errorMsgs;
}

var APIEndpoints = SmallConstants.APIEndpoints;

module.exports = {

  signup: function(email, username, password, passwordConfirmation) {
    request.post(APIEndpoints.REGISTRATION)
      .send({ user: {
        email: email,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      }})
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },

  login: function(email, password) {
    request.post(APIEndpoints.LOGIN)
      .send({ email: email, password: password, grant_type: 'password' })
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {

            var errorMsgs = _getErrors(res);
            console.log(errorMsgs);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            console.log(json);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },

  loadUser: function() {
    request.get(APIEndpoints.USER)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          console.log('loaded user');
          console.log(json);
          ServerActionCreators.receiveUser(json);
        }
      });
  },
  receivePage: function(id) {
    console.log('rec page');
    request.get(APIEndpoints.PAGE)
      .query({ id: id})
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          console.log('loaded page');
          console.log(json);
          ServerActionCreators.receivePage(json);
        }
      });
  },
  updateSAT: function(confirmed) {
    request.put(APIEndpoints.SAT)
      .send({completed: confirmed })
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          if (res.error) {
            console.log("ERRORRS");
          }
          json = JSON.parse(res.text);
          console.log(json);
          ServerActionCreators.receiveUser(json);
        }
      });
  },
    updateUserTasks: function(task, confirmed) {
    request.put(APIEndpoints.USER)
      .send({task: task, completed: confirmed })
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          if (res.error) {
            console.log("ERRORRS");
          }
          json = JSON.parse(res.text);
          console.log(json);
          ServerActionCreators.receiveUser(json);
        }
      });
  },

  updateUserProfile: function(profile) {
    request.put(APIEndpoints.USER)
      .send({user: profile })
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          if (res.error) {
            console.log("ERRORRS");
          }
          json = JSON.parse(res.text);
          console.log(json);
          ServerActionCreators.receiveUser(json);
        }
      });
  }

};
