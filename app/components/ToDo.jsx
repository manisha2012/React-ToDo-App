var React = require('react');

var ToDo = React.createClass({
  toggleTodo: function () {
    var {text, id, completed} = this.props;
    this.props.onToggle(id);
  },
  render: function () {
    var {text, id, completed} = this.props;
    return (
      <div onClick={this.toggleTodo}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});

module.exports = ToDo;
