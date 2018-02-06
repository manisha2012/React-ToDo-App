var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import ToDoList from 'ToDoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var ToDoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <ToDoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
