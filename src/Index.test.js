
import { addDrink, ADD_DRINK } from './index';

describe('lunch actions', () => {
  it('creates add drink', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });
});

