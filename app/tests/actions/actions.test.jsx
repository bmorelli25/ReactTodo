import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

//create a mock store for use during our tests below
//don't want to share stores between tests
var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search Text'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc124',
        text: 'can be anything',
        completed: false,
        createdAt: 0
      }
    };

    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    //since it's an asynch test, we use done
    const store = createMockStore({}); //create instance of our mock store
    const todoText = 'My Todo Item';

    store.dispatch(actions.startAddTodo(todoText)).then( () => {
      const actions = store.getActions();

      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: 111,
      text: 'anything',
      completed: false,
      completeAt: undefined,
      createdAt: 33000
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
