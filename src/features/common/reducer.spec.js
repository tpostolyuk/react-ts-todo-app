import * as types from './types';
import {
  todoReducer,
  initialState
} from './reducer';

describe("Reducer tests", () => {
  it("ADD TODO", () => {
    const action = {
      type: types.ADD_TODO,
      todo: {
        id: 'wecweca4g54v645v32',
        title: 'Make a coffee',
        isEditing: false
      }
    }

    expect(todoReducer(initialState, action)).toEqual({
      ...initialState,
      todos: [...initialState.todos, action.todo]
    })
  })

  it("REMOVE TODO", () => {
    const action = {
      type: types.REMOVE_TODO,
      id: "32v425v34gvb572"
    }

    expect(todoReducer(initialState, action)).toEqual({
      ...initialState,
      todos: [...initialState.todos.filter(item => item.id !== action.id)]
    })
  })

  it("EDIT TODO", () => {
    const action = {
      type: types.EDIT_TODO,
      id: "32v425v34gvb572"
    }

    expect(todoReducer(initialState, action)).toEqual({
      ...initialState,
      todos: [...initialState.todos.map(item => item.id === action.id ? {
        ...item,
        isEditing: true
      } : item)]
    })
  })

  it("FINISH EDITING TODO", () => {
    const action = {
      type: types.FINISH_EDITING_TODO,
      id: "32v425v34gvb572",
      updatedTodoText: "Go for a walk"
    }

    expect(todoReducer(initialState, action)).toEqual({
      ...initialState,
      todos: [...initialState.todos.map(item => item.id === action.id ? {
        ...item,
        title: action.updatedTodoText,
      } : item)]
    })
  })
});