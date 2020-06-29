import React from 'react';
import s from './todo-board.module.css';
import { TodoForm } from '../../features';
import { TodoList } from '../../features';

export const TodoBoard:React.FC = () => {
  return (
    <div className={s.board}>
      <TodoForm />
      <TodoList />
    </div>
  )
}
