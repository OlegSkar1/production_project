import { DeepPartial } from '@reduxjs/toolkit';

import { getCounterValue } from './getCounterValue';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
