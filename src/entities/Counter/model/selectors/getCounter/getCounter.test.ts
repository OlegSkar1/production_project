import { getCounter } from './getCounter';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounter', () => {
  it('should return counter', () => {
    const state: StateSchema = {
      counter: { value: 10 },
    };
    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
