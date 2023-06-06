let articleId = '';

describe('Пользователь открывает страницу со статьей', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((body) => {
      articleId = body.id;
      cy.visit(`articles/${body.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
  });

  it('И тестовая статья открывается', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('И видит список рекомендаций', () => {
    cy.getByTestId('RecommendArticles').should('exist');
  });
  it('И оставляет комментарий', () => {
    const text = 'test comment for e2e';
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddNewCommentForm').scrollIntoView();
    cy.addComment(text);
    cy.getByTestId(`CommentCard.${text}`).should('exist');
  });
  it('И оставляет отзыв', () => {
    const rateCount = 4;
    const feedback = 'good article';

    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('ArticleRateCard').scrollIntoView();
    cy.addRate(rateCount, feedback);
    cy.get('[data-selected=true]').should('have.length', rateCount);
  });
  it('И ставит оценку, пример со стабом(фикстура)', () => {
    const rateCount = 4;
    const feedback = 'good article';

    cy.intercept('GET', '**/articles/*', { fixture: 'articleDetails.json' });

    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('ArticleRateCard').scrollIntoView();
    cy.addRate(rateCount, feedback);
    cy.get('[data-selected=true]').should('have.length', rateCount);
  });
});
