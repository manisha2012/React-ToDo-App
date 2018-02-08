var React = require('react');  // already installed via npm in package.json
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');
var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		hashHistory.push('/todos');
	} else {
		hashHistory.push('/');
	}
});

store.dispatch(actions.startAddTodos());
//load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')



// React DOM method : render which is rendering react component
ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);

// 'history' prop tells that we're going to use # (in http://localhost:3000/#/examples?_k=iwa4x7) followed by path in order to maintain routes for our app
