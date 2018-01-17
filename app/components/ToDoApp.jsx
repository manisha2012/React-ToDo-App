var React = require('react');
var ToDoList = require('ToDoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos : [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Feed the cat'
        }, {
          id: 3,
          text: 'Water the plants'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: '+ text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
