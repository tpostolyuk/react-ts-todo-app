import * as types from './types'
import {
  AddTodoAction,
  RemoveTodoAction,
  EditTodoAction,
  FinishEditingTodoAction,
  Todo,
} from './action-types'

export const addTodo = (todo: Todo): AddTodoAction => {
  return {
    type: types.ADD_TODO,
    todo,
  }
}

export const removeTodo = (id: string): RemoveTodoAction => {
  return {
    type: types.REMOVE_TODO,
    id,
  }
}

export const editTodo = (id: string): EditTodoAction => {
  return {
    type: types.EDIT_TODO,
    id,
  }
}

export const finishEditingTodo = (
  id: string,
  updatedTodoText: string
): FinishEditingTodoAction => {
  return {
    type: types.FINISH_EDITING_TODO,
    id,
    updatedTodoText,
  }
}
