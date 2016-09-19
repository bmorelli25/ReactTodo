var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';

//function gets called everytime the auth state changes
firebase.auth().onAuthStateChanged((user) => {
  if (user) { //means someone logged in
    hashHistory.push('/todos');
  } else { //means someone logged out
    hashHistory.push('/');
  }
});

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New State: ', state);
//
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

//fetch data from firebase
store.dispatch(actions.startAddTodos());

//Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

//react-router midleware -> when someone switches to todosRoute this gets checked first
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) { //runs if no one is logged in
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) { //runs if no one is logged in
    replace('/todos');
  }
  next();
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
        <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
