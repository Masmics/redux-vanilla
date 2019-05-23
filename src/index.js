import { createStore } from 'redux';
import {
  ADD_SANDWICH,
  REMOVE_SANDWICH,

  ADD_CHIPS,
  REMOVE_CHIPS,

  ADD_DRINK,
  REMOVE_DRINK

} from './actions/lunchActions';

const initialState = {
  sandwich: null,
  chips: null,
  drink: null
};

function reducer(state = initialState, action) {

  switch(action.type) {
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
  }
  switch(action.type) {
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
  }
  switch(action.type) {
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
  }
  switch(action.type) {
    case REMOVE_CHIPS:
      return { ...state, chips: null };
  }
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
  }
  switch(action.type) {
    case REMOVE_DRINK:
      return { ...state, drink: null };
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Jelly'
});
console.log('state after sandwich add', store.getState());
store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'Jelly'
});
console.log('state after sandwich remove', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'English'
});
console.log('state after chips add', store.getState());
store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'English'
});
console.log('state after chips remove', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Beer'
});
console.log('state after drink add', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'Beer'
});
console.log('state after drink remove', store.getState());
