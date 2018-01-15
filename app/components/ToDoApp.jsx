var React = require('react');
var ToDoList = require('ToDoList');

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
  render: function () {
    var {todos} = this.state;
    return (
      <ToDoList todos={todos}/>
    );
  }
});

module.exports = ToDoApp;
