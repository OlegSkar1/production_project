import { Article } from '../../../src/entities/Article';

export const createArticle = () => {
  return cy
    .request({
      url: 'http://localhost:8000/articles',
      method: 'POST',
      headers: { Authorization: 'dsfdsf' },
      body: {
        title: 'Test Article',
        subtitle: 'JavaScript',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        createdAt: '18.05.2022',
        views: 1092,
        userId: '4',
        type: ['IT'],
        blocks: [],
      },
    })
    .then(({ body }) => {
      return body;
    });
};

export const removeArticle = (articleId: string) => {
  cy.request({
    url: `http://localhost:8000/articles/${articleId}`,
    method: 'DELETE',
    headers: { Authorization: 'sdgds' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
