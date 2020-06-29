import React from "react";
import s from "./App.module.css";
import { Provider } from 'react-redux';
import { TodoContainer } from "./ui";
import { store } from './lib/store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={s.app}>
        <h1>To Do</h1>
        <TodoContainer />
      </div>
    </Provider>
  );
};
