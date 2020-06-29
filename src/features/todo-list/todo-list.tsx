import React from "react";
import { useSelector } from 'react-redux';
import { todos } from '../common/selectors';
import { Todo } from '../common/action-types'
import { TodoItem } from '../todo-item';

export const TodoList:React.FC = () => {
  const items: Array<Todo> = useSelector(todos);
  const todo = items.map(item => <TodoItem key={item.id} id={item.id} title={item.title} isEditing={item.isEditing} />);
  return (
    <React.Fragment>
      {todo}
    </React.Fragment>
  );
};
