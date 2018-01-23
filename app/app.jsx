var React = require('react');  // already installed via npm in package.json
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
//load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// React DOM method : render which is rendering react component
ReactDOM.render(
	<Provider store={store}>
		<ToDoApp/>
	</Provider>,
	document.getElementById('app')
);

// 'history' prop tells that we're going to use # (in http://localhost:3000/#/examples?_k=iwa4x7) followed by path in order to maintain routes for our app
