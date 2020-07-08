import React, { useState, PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { Todo } from '../common/action-types'
import { removeTodo, editTodo, finishEditingTodo } from '../common/actions'
import s from './todo-item.module.css'

export const TodoItem: React.FC<Todo> = (props: PropsWithChildren<Todo>) => {
  const { id, title, isEditing } = props

  const [updatedTodoValue, setUpdatedTodoValue] = useState<string>(title)

  const dispatch = useDispatch()

  const handleDelete = (): void => {
    dispatch(removeTodo(id))
  }

  const handleEdit = (): void => {
    dispatch(editTodo(id))
  }
  const handleFinishEditing = (): void => {
    if (updatedTodoValue === '') {
      alert('Enter new todo title')
    } else {
      dispatch(finishEditingTodo(id, updatedTodoValue))
    }
  }

  if (isEditing) {
    return (
      <div className={s.item}>
        <input
          onChange={(e) => setUpdatedTodoValue(e.target.value)}
          className={s.input}
          value={updatedTodoValue}
          type="text"
        />
        <div className={s.actions}>
          <button className={s.button} onClick={handleFinishEditing}>
            Finish
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className={s.item}>
      <p>{title}</p>
      <div className={s.actions}>
        <button className={s['edit-button']} onClick={() => handleEdit()}>
          Edit
        </button>
        <button className={s['delete-button']} onClick={handleDelete} />
      </div>
    </div>
  )
}
