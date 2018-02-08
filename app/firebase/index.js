import firebase from 'firebase';

try {
  // Copied from firebase.google.com - Add Firebase To your web app
  var config = {
      apiKey: "AIzaSyBWZIhfNko7VwK1b2MIZpRs0KlWXeDeliI",
      authDomain: "todo-app-f574a.firebaseapp.com",
      databaseURL: "https://todo-app-f574a.firebaseio.com",
      projectId: "todo-app-f574a",
      storageBucket: "todo-app-f574a.appspot.com",
      messagingSenderId: "89941182708"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
