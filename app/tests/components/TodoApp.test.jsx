var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoapp.setState({todos: []});
    todoapp.handleAddTodo(todoText);

    expect(todoapp.state.todos[0].text).toBe(todoText);
    expect(todoapp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoapp.setState({todos: [todoData]});
    expect(todoapp.state.todos[0].completed).toBe(false);

    todoapp.handleToggle(todoData.id);
    expect(todoapp.state.todos[0].completed).toBe(true);
    expect(todoapp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completedAt when completed is toggled from true to false', () => {
    var todoData = {
      id: 11,
      text: 'test',
      completed: true,
      createdAt: 0,
      completedAt: 10
    };
    var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoapp.setState({todos: [todoData]});
    expect(todoapp.state.todos[0].completed).toBe(true);

    todoapp.handleToggle(todoData.id);
    expect(todoapp.state.todos[0].completed).toBe(false);
    expect(todoapp.state.todos[0].completedAt).toBe(undefined);
  });
});
