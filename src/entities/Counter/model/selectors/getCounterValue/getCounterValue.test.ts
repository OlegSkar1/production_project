import { getCounterValue } from './getCounterValue';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: StateSchema = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state)).toEqual(10);
  });
});
