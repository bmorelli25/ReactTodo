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

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
