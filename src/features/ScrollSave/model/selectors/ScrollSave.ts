import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getScroll = (state: StateSchema) => state.scrollSave.scroll;
export const getScrollByPath = createSelector(
  getScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
