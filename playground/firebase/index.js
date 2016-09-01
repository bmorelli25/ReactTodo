import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB_CYm7F0xoTqFo5d3ZIf_qFtJ9YtVrtpM",
  authDomain: "react-todo-app-1dc20.firebaseapp.com",
  databaseURL: "https://react-todo-app-1dc20.firebaseio.com",
  storageBucket: "react-todo-app-1dc20.appspot.com",
};
firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Todo App'
});

// what the database looks like
// {
//   appName: 'Todo App',
//   isRunning: true
// }
