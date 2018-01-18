var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({
  toggleTodo: function () {
    var {text, id, completed} = this.props;
    this.props.onToggle(id);
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

module.exports = ToDo;
