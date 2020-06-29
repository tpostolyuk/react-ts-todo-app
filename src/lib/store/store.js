import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  logger
} from "redux-logger";
import {
  todoReducer
}
from '../../features/common';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));