import rootReducer from './reducers';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;