var expect = require('expect');

var actions = require('actions');

describe('Actions', () => {
  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search Text'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
});
