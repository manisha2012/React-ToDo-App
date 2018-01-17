var React = require('react');
var ToDoList = require('ToDoList');
var AddTodo = require('AddTodo');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <ToDoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
