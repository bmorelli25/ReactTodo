var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Mow the lawn'
        }, {
          id: 3,
          text: 'Go outside'
        }, {
          id: 4,
          text: 'Go inside'
        }
      ]
    };
  },
  //listen for new Todo items being created
  handleAddTodo: function (text){
    alert('new todo: ' + text)
  },
  handleSearch: function (showCompleted, searchText) {
    //we get the search text and the checkbox status from TodoSearch.jsx
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
