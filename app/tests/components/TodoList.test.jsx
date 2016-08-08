var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
});
