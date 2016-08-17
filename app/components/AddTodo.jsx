var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText); //sends todoText to onAddTodo in TodoApp.jsx
    } else {
      this.refs.todoText.focus(); //puts cursor back in this input box
    }
  },
  render: function () {
    return (
      <div className='container__footer'>
        <form ref="form" onSubmit={this.handleSubmit} className="add-todo">
          <input type="text" placeholder="What do you need to do?" ref="todoText"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
