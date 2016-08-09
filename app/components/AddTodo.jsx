var React = require('react');

var AddTodo = React.createClass({
  onAddTodo: function (e) {
    e.preventDefault();
    var newTodo = this.refs.newTodo.value;

    if(newTodo.length > 0){
      this.refs.newTodo.value = "";
      this.props.newTodo(newTodo);
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onAddTodo} className="add-todo">
          <input type="text" placeholder="What do you need to do?" ref="newTodo"/>
        <button className="button primary">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
