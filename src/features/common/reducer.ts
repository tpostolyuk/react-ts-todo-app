import * as types from './types';
import { actionTypes, inititalState } from './action-types';

const initialState: inititalState = {
  todos: [
    {id: '32v425v34gvb572', title: 'Buy a milk', isEditing: false}
  ],
};

export const todoReducer = (state: inititalState = initialState, action: actionTypes) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id)
      }
    case types.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(
          item => item.id === action.id ? {...item, isEditing: true} : item
        )
      }
    case types.FINISH_EDITING_TODO:
      return {
        ...state,
        todos: state.todos.map(
          item => item.id === action.id ? {...item, title: action.updatedTodoText, isEditing: false} : item
        )
      }
      default:
        return state;
  }
};