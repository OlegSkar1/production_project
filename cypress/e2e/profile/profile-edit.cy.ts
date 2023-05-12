let profileId = '';

describe('Тест редактирования профиля', () => {
  beforeEach(() => {
    cy.login().then((body) => {
      profileId = body.id;
      cy.visit(`/profile/${body.id}`);
    });
  });

  afterEach(() => {
    cy.profileReset(profileId);
  });
  it('Проверка успешного перехода на страницу профиля', () => {
    cy.getByTestId('ProfileCard.first').should('have.value', 'Test');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'User');
  });
  it('Проверка редактирования профиля', () => {
    const firstname = 'new Test User';
    const lastname = 'new User';
    cy.profileUpdate(firstname, lastname);
    cy.getByTestId('ProfileCard.first').should('have.value', firstname);
    cy.getByTestId('ProfileCard.lastname').should('have.value', lastname);
  });
});
