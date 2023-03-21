import { addCommentActions, addCommentReducer } from './addCommentSlice';

import { AddCommentSchema } from '../types/AddCommentSchema';

describe('addCommentSlice', () => {
  it('should set text', () => {
    const state: DeepPartial<AddCommentSchema> = {
      text: 'text',
    };
    expect(addCommentReducer(state, addCommentActions.setText('text'))).toEqual({ text: 'text' });
  });
});
