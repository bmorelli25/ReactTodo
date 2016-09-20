var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

//function gets called everytime the auth state changes
firebase.auth().onAuthStateChanged((user) => {
  if (user) { //means someone logged in
    store.dispatch(actions.login(user.uid));
    //fetch data from firebase
    store.dispatch(actions.startAddTodos());
    //redirect to todos
    hashHistory.push('/todos');
  } else { //means someone logged out
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

//Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
