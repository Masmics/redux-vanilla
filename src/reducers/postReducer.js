import {
  ADD_SANDWICH,
  REMOVE_SANDWICH,

  ADD_CHIPS,
  REMOVE_CHIPS,

  ADD_DRINK,
  REMOVE_DRINK

} from '../actions/lunchActions';

const initialState = {
  sandwich: null,
  chips: null,
  drink: null
};

export default function reducer(state = initialState, action) {

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

// store an array of posts
// handle create a post
// handle delete a post
// BONUS: handle update a post by index
