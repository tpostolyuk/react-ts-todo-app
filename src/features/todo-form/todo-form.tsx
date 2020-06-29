import React, { useState } from "react";
import s from "./todo-form.module.css";
import * as actions from '../common/actions';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export const TodoForm: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue((e.target as HTMLInputElement).value);
  };

  const handleClick = (): void => {
    if(value !== '') {
      dispatch(actions.addTodo({ id: uuidv4(), title: value, isEditing: false }));
      setValue("");
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className={s.form}>
      <input
        value={value}
        className={s.input}
        type='text'
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      <button className={s.button} type='button' onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
