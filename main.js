var database;

var config = {
  apiKey: "AIzaSyCn1MHKKh2jDJqO_ozNFnJBHO7xiy8FtuE",
  authDomain: "frc-match-subs.firebaseapp.com",
  databaseURL: "https://frc-match-subs.firebaseio.com",
  projectId: "frc-match-subs",
  storageBucket: "",
  messagingSenderId: "844799479576"
};
firebase.initializeApp(config);
database = firebase.database();

function login() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  setAccess();
}

function logout() {
  firebase.auth().signOut().then(function() {
  }, function(err) {});
  setAccess();
}

function setAccess() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      show('logout');
      show('content');
      hide('login');
    } else {
      hide('content');
      hide('logout');
      show('login');
    }
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}
