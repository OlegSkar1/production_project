describe('Роутинг', () => {
  it('Должна открыться главная страница', () => {
    cy.visit('/');

    cy.get('[data-testid=MainPage]').should('exist');
  });
});
