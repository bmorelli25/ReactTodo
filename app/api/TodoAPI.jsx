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
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed){
        return -1; // a before b
      } else if (a.completed && !b.completed){
        return 1; // b before a
      } else {
        return 0; // no change necessary
      }
    });

    return filteredTodos;
  }
};
