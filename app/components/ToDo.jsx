var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

var ToDo = React.createClass({
  toggleTodo: function () {
    var {text, id, completed, dispatch} = this.props;
    //this.props.onToggle(id);
    dispatch(actions.toggleTodo(id));
  },
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created on ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed on ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={this.toggleTodo}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = connect()(ToDo);
