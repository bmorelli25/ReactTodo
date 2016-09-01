import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB_CYm7F0xoTqFo5d3ZIf_qFtJ9YtVrtpM",
  authDomain: "react-todo-app-1dc20.firebaseapp.com",
  databaseURL: "https://react-todo-app-1dc20.firebaseio.com",
  storageBucket: "react-todo-app-1dc20.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

//set completely wipes everything at current reference
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Brandon',
    age: 26
  }
}).then(()=> {
  console.log('Set Worked');
}, (e) => {
  console.log('Set Failed');
});

// Running this removes the data set above
// firebaseRef.set({
//   appName: 'Todo Application'
// });

firebaseRef.child('app').set({
  name: 'React-Todo-App'
});

// what the database looks like
// {
//   appName: 'Todo App',
//   isRunning: true
// }
