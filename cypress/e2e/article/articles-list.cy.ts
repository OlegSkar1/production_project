describe('Тестирование страницы статей', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('articles');
  });
  it('Пользователь заходит на страницу статей', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it.only('И Сортирует по просмотрам, порядку, поисковой строке и категории', () => {
    const sort = 'views';
    const order = 'desc';
    const search = 'java';
    const tabValue = 'IT';

    cy.addSort({ sort, order, search, tabValue });
    cy.getByTestId('ArticlesPageSort.sort').should('have.value', sort);
    cy.getByTestId('ArticlesPageSort.order').should('have.value', order);
    cy.getByTestId('ArticlesPageSearch').should('have.value', search);
    cy.getByTestId(`Tab-${tabValue}`).should('have.text', 'Айти');
  });
});
