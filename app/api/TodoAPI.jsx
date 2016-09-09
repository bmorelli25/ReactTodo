var $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      if (searchText === '') {
        return true;
      } else if (text.indexOf(searchText) >= 0){
        return true;
      } else {
        return false;
      }
    });

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
