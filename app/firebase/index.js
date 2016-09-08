import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyB_CYm7F0xoTqFo5d3ZIf_qFtJ9YtVrtpM",
    authDomain: "react-todo-app-1dc20.firebaseapp.com",
    databaseURL: "https://react-todo-app-1dc20.firebaseio.com",
    storageBucket: "react-todo-app-1dc20.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
