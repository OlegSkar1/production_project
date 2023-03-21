import { getText } from './getText';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getText', () => {
  it('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { text: 'text' },
    };
    expect(getText(state as StateSchema)).toBe('text');
  });
  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {},
    };
    expect(getText(state as StateSchema)).toBe('');
  });
});
