import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/scroll';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
