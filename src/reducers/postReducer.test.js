import reducer from './postReducer';
import { addSandwich, removeSandwich, addChips, removeChips, addDrink, removeDrink } from '../actions/lunchActions';

describe('reducer component', () => {
  it('facilitates add sandwich', () => {
    const initialState = {
      sandwich: null
    };
    const updatedState = reducer(initialState, addSandwich('cheese'));
    expect(updatedState).toEqual({
      sandwich: 'cheese'
    });
  });

  it('facilitates remove sandwich', () => {
    const initialState = {
      sandwich: 'cheese'
    };
    const updatedState = reducer(initialState, removeSandwich());
    expect(updatedState).toEqual({
      sandwich: null
    });
  });

  it('facilitates add chips', () => {
    const initialState = {
      chips: null
    };
    const updatedState = reducer(initialState, addChips('potato'));
    expect(updatedState).toEqual({
      chips: 'potato'
    });
  });
  it('facilitates remove chips', () => {
    const initialState = {
      chips: 'potato'
    };
    const updatedState = reducer(initialState, removeChips());
    expect(updatedState).toEqual({
      chips: null
    });
  });

  it('facilitates add drink', () => {
    const initialState = {
      drink: null
    };
    const updatedState = reducer(initialState, addDrink('iced tea'));
    expect(updatedState).toEqual({
      drink: 'iced tea'
    });
  });
  it('facilitates remove drink', () => {
    const initialState = {
      drink: 'iced tea'
    };
    const updatedState = reducer(initialState, removeDrink());
    expect(updatedState).toEqual({
      drink: null
    });
  });
});
