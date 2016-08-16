var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  //gets called before each test
  beforeEach( () => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(todos).toEqual(actualTodos);
    });
    it('should not set invalid todos array', () => {
      var todos = {a: 'b'};
      TodoAPI.setTodos(todos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'some text here',
      completed: true
    }, {
      id: 2,
      text: 'other text here',
      completed: false
    }, {
      id: 3,
      text: 'some text here',
      completed: true
    }];
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return only incomplete items if showCompleted is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });
  });
});
