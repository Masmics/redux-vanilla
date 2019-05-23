
import { addsDrink, ADD_DRINK } from './App';

describe('lunch actions', () => {
  it('creates add drink', () => {
    expect(addsDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });
});

