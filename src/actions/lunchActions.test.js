import {
  addSandwich,
  ADD_SANDWICH,
  addChips,
  ADD_CHIPS,
  addDrink,
  ADD_DRINK
} from './lunchActions';

describe('Lunch actions component', () => {
  it('adds a sandwich', () => {
    expect(addSandwich('cheese')).toEqual({
      type: ADD_SANDWICH,
      payload: 'cheese'
    });
  });
  it('adds chips', () => {
    expect(addChips('potato')).toEqual({
      type: ADD_CHIPS,
      payload: 'potato'
    });
  });
  it('adds a drink', () => {
    expect(addDrink('iced tea')).toEqual({
      type: ADD_DRINK,
      payload: 'iced tea'
    });
  });
});
