import React from 'react'
import { TodoForm, TodoList } from '../../features'
import s from './todo-board.module.css'

export const TodoBoard: React.FC = () => {
  return (
    <div className={s.board}>
      <TodoForm />
      <TodoList />
    </div>
  )
}
