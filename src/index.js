import { createStore } from 'redux';
import reducer from './reducers/postReducer';
import { 
  ADD_SANDWICH, 
  ADD_CHIPS, 
  ADD_DRINK,
  REMOVE_SANDWICH,
  REMOVE_CHIPS,
  REMOVE_DRINK
} from './actions/postActions';

const store = createStore(reducer);

store.dispatch({
  type: ADD_SANDWICH,
  payload: 'Jelly'
});
console.log('state after sandwich add', store.getState());
store.dispatch({
  type: REMOVE_SANDWICH,
  payload: 'Jelly'
});
console.log('state after sandwich remove', store.getState());

store.dispatch({
  type: ADD_CHIPS,
  payload: 'English'
});
console.log('state after chips add', store.getState());
store.dispatch({
  type: REMOVE_CHIPS,
  payload: 'English'
});
console.log('state after chips remove', store.getState());

store.dispatch({
  type: ADD_DRINK,
  payload: 'Beer'
});
console.log('state after drink add', store.getState());

store.dispatch({
  type: REMOVE_DRINK,
  payload: 'Beer'
});
console.log('state after drink remove', store.getState());
