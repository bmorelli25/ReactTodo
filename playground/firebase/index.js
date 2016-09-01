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

firebaseRef.update({
  isRunning: false,
  'app/name': 'React Todo App' // example of multipath update
});

firebaseRef.child('app').update({
  version: '1.0.1'
}).then( () => {
  console.log('Update Worked');
}, (e) => {
  console.log('Update Failed');
});

// firebaseRef.remove(); //removes everything

// firebaseRef.child('app/name').remove() //removes app name

firebaseRef.child('app').update({
  version: '2.0',
  name: null
});
