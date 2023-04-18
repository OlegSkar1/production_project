import { getUserIsEditArticle } from './getUserIsEditArticle';

import { Article } from '../../types/article';

import { User } from 'entities/User';

describe('getUserIsEditArticle', () => {
  it('should return `false` when user or article is not provided', () => {
    const user = undefined;
    const article = undefined;
    const expected = false;
    const result = getUserIsEditArticle.resultFunc(user, article);
    expect(result).toBe(expected);
  });

  it('should return `true` when the user is editing their own article', () => {
    const user = { id: '1' } as User;
    const article = { user: { id: '1' } } as Article;
    const expected = true;
    const result = getUserIsEditArticle.resultFunc(user, article);
    expect(result).toBe(expected);
  });

  it('should return `false` when the user is not editing their own article', () => {
    const user = { id: '1' } as User;
    const article = { user: { id: '2' } } as Article;
    const expected = false;
    const result = getUserIsEditArticle.resultFunc(user, article);
    expect(result).toBe(expected);
  });
});
