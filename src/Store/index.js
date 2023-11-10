import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import mainReducer from './Main/reducer';
// import SearchBoxReducer from './SearchBox/reducer';

/**
 * All page wise reducers are defined here.
 * Add clear Key to reduces, it will be add as the store name
 */
const rootReducer = combineReducers({
  //   main: mainReducer,
  //   searchBox: SearchBoxReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function StoreProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default StoreProvider;
