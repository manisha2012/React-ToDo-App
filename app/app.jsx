var React = require('react');  // already installed via npm in package.json
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require('ToDoApp');
var TodoAPI = require('TodoAPI');
import Login from 'Login';

var actions = require('actions');
var store = require('configureStore').configure();

// store.subscribe(() => {
// 	var state = store.getState();
// 	console.log('New state', state);
// 	TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());
//load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// React DOM method : render which is rendering react component
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={ToDoApp}/>
				<IndexRoute component={Login}/>  //path is default
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);

// 'history' prop tells that we're going to use # (in http://localhost:3000/#/examples?_k=iwa4x7) followed by path in order to maintain routes for our app
