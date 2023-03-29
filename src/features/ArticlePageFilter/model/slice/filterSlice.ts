import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticlesFilterSchema } from '../types/articlesFilterTypes';

import { SortType } from 'entities/Article';
import { OrderType } from 'shared/types';

const initialState: ArticlesFilterSchema = {
  sort: SortType.CREATED_AT,
  order: 'asc',
  search: '',
};

export const articlesFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state: ArticlesFilterSchema, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setOrder: (state: ArticlesFilterSchema, action: PayloadAction<OrderType>) => {
      state.order = action.payload;
    },
    setSearch: (state: ArticlesFilterSchema, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { actions: articlesFilterActions } = articlesFilterSlice;
export const { reducer: articlesFilterReducer } = articlesFilterSlice;
