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
    hashHistory.push('/todos');
  } else { //means someone logged out
    hashHistory.push('/');
  }
});

//fetch data from firebase
store.dispatch(actions.startAddTodos());

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
