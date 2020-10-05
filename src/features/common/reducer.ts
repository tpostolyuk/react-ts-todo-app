import * as types from './types'
import { ActionTypes, InititalState } from './action-types'

export const initialState: InititalState = {
  todos: [
    {
      id: '32v425v34gvb572',
      title: 'Buy a milk',
      isEditing: false,
    },
    {
      id: '32c5345b3464536',
      title: 'Read a book',
      isEditing: false,
    },
  ],
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const todoReducer = (
  state: InititalState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      }
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      }
    case types.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.id ? { ...item, isEditing: true } : item
        ),
      }
    case types.FINISH_EDITING_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.id
            ? { ...item, title: action.updatedTodoText, isEditing: false }
            : item
        ),
      }
    default:
      return state
  }
}
