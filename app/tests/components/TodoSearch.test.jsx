var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = "make a chicken sandwich";
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todosearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todosearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todosearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
