var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call handleAddTodo if todo is entered', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo newTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.newTodo.value = 'mow the lawn';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('mow the lawn');
  });

  it('should NOT call handleAddTodo if todo is empty', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo newTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.newTodo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
