import * as types from './types'

export interface Todo {
  id: string
  title: string
  isEditing: boolean
}

export interface InititalState {
  todos: Todo[]
}

export interface AddTodoAction {
  type: typeof types.ADD_TODO
  todo: Todo
}

export interface RemoveTodoAction {
  type: typeof types.REMOVE_TODO
  id: string
}

export interface EditTodoAction {
  type: typeof types.EDIT_TODO
  id: string
}

export interface FinishEditingTodoAction {
  type: typeof types.FINISH_EDITING_TODO
  id: string
  updatedTodoText: string
}

export type ActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | EditTodoAction
  | FinishEditingTodoAction
