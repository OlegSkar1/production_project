import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentSchema } from '../types/AddCommentSchema';

const initialState: AddCommentSchema = {
  text: '',
  error: undefined,
};

export const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
