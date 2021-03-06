var React = require('react');
import ToDo from 'ToDo'
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

export var ToDoList = React.createClass({
  render: function () {
    var {todos, searchText, showCompleted} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if(filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to do.</p>
        );
      }
      return filteredTodos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect((state) => {
  return state;
})(ToDoList);
