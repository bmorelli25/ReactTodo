var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchText = "make a chicken sandwich";
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todosearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todosearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todosearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
