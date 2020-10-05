import React from 'react'
import { Provider } from 'react-redux'
import { TodoContainer } from './ui'
import { store } from './lib/store'
import s from './App.module.css'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={s.app}>
        <h1>Todo Application</h1>
        <TodoContainer />
      </div>
    </Provider>
  )
}
