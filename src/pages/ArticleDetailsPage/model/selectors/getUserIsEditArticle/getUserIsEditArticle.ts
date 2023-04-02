import { createSelector } from '@reduxjs/toolkit';

import { getArticleData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getUserIsEditArticle = createSelector(getUserAuthData, getArticleData, (user, article) => {
  if (!user || !article) {
    return false;
  }
  return user.id === article.user.id;
});
