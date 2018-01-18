var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({
  toggleTodo: function () {
    var {text, id, completed} = this.props;
    this.props.onToggle(id);
  },
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props;
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
      <div onClick={this.toggleTodo}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = ToDo;
