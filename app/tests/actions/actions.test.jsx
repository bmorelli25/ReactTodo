import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';
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

  it('should generate updateTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    };

    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  it('should generate login action object', () => {
    const action = {
      type: 'LOGIN',
      uid: '123abc'
    };
    const res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
    const action = {
      type: 'LOGOUT'
    };
    const res = actions.logout();

    expect(res).toEqual(action);
  });

});

//run lifecycle methods to run before and after our tests
//allows us to set up data before running test cases
describe('tests with firebase todos', () => {
  var testTodoRefText = 'test test test text';
  var testTodoRef;
  //mocha: code to run before each test
  beforeEach( (done) => {
    var todosRef = firebaseRef.child('todos');
    todosRef.remove().then(() => {
      testTodoRef = firebaseRef.child('todos').push();

      return testTodoRef.set({
        text: testTodoRefText,
        completed: false,
        createdAt: 123123
      })
    })
    .then(() => done())
    .catch(done);
  });

  //mocha: runs after each test
  afterEach( (done) => {
    testTodoRef.remove().then(() => done());
  });

  it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
    const store = createMockStore({});
    const action = actions.startToggleTodo(testTodoRef.key, true);

    store.dispatch(action).then(() => {
      const mockActions = store.getActions();

      expect(mockActions[0]).toInclude({
        type: 'UPDATE_TODO',
        id: testTodoRef.key,
      });
      expect(mockActions[0].updates).toInclude({
        completed: true
      });
      expect(mockActions[0].updates.completedAt).toExist();
      done();
    }, done);
  });

  it('should populate todos and dispatch ADD_TODOS', (done) => {
    const store = createMockStore({});
    const action = actions.startAddTodos();

    store.dispatch(action).then(() => {
      const mockActions = store.getActions();

      expect(mockActions[0].type).toEqual('ADD_TODOS');
      expect(mockActions[0].todos.length).toEqual(1);
      expect(mockActions[0].todos[0].text).toEqual(testTodoRefText);

      done();
    }, done)
  });
});
