import React from 'react'
import { TodoBoard } from '../todo-board'
import s from './todo-container.module.css'

export const TodoContainer: React.FC = () => {
  return (
    <div className={s.container}>
      <TodoBoard />
    </div>
  )
}
