import * as types from './types';

export type Todo = {
  id: string;
  title: string;
  isEditing: boolean;
}

export type inititalState = {
  todos: Array<Todo>
}


export type AddTodoAction = {
  type: typeof types.ADD_TODO;
  todo: Todo
}

export type RemoveTodoAction = {
  type: typeof types.REMOVE_TODO;
  id: string;
}

export type EditTodoAction = {
  type: typeof types.EDIT_TODO;
  id: string;
}

export type FinishEditingTodoAction = {
  type: typeof types.FINISH_EDITING_TODO;
  id: string;
  updatedTodoText: string;
}

export type actionTypes = AddTodoAction | RemoveTodoAction | EditTodoAction | FinishEditingTodoAction;