import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import ToDoApp from 'ToDoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

//Middleware - if u are not logged in & manually try to enter in app, it will redirect to login page
var requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser) {
		replace('/');
	}
	next();
};

//Middleware that kicks u out of login page if u're already logged in
var redirectIfLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser) {
		replace('/todos');
	}
	next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={ToDoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>  //path is default
    </Route>
  </Router>
)
