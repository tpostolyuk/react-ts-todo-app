import React from 'react';
import s from './todo-container.module.css';
import { TodoBoard } from '../todo-board';

export const TodoContainer:React.FC = () => {
  return (
    <div className={s.container}>
      <TodoBoard />
    </div>
  )
}
