import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger'
import reducer from "./reducers/index";

const redirect = store => next => action => {
  if (action.type === 'ROUTING') {
    action.history[action.method](action.location);
  }
  return next(action);
};

const store = createStore(
  reducer,
  compose(
    applyMiddleware(logger),
    applyMiddleware(redirect)
  )
);

export default store;