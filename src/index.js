import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from "redux";
import allReducers from "./Reducers/index";
import { Provider } from "react-redux";


{/*
// Store well the store is a place to store data as
//action
const increment = () => {
  return {
    type: "INCREMENT"
  }
}
const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

// reducer will tell us what is supposed happen when we perform an action

const counter = ( state=0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state+1
      case "DECREMENT":
        return state-1
  }
}

//store
let store = createStore(counter)

//to display  our counter in the console window
store.subscribe(() => console.log(store.getState())); // we are logging the currect value of the store

// dispachter
store.dispatch(increment());
store.dispatch(decrement());
*/}


const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

