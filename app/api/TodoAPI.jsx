var $ = require('jquery');

module.exports = {
  setTodos: function (todos) { //called when we toggle a todo or add a new todo
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    };
  },
  getTodos: function () { //called when app first starts
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {};

    return $.isArray(todos) ? todos : [];
  }
};
