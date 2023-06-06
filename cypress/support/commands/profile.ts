export const profileUpdate = (firstname: string, lastname: string) => {
  cy.getByTestId('ProfileHeader.editBtn').click();
  cy.getByTestId('ProfileCard.first').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('ProfileHeader.saveBtn').click();
};

export const profileReset = (profileId: string) => {
  cy.request({
    url: `http://localhost:8000/profile/${profileId}`,
    method: 'PUT',
    headers: { Authorization: 'dsfdsf' },
    body: {
      first: 'Test',
      lastname: 'User',
      age: '20',
      currency: 'RUB',
      country: 'Russia',
      city: 'Yekaterinburg',
      username: 'admin',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      id: '4',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      profileUpdate(firstname: string, lastname: string): Chainable<void>;
      profileReset(profileId: string): Chainable<void>;
    }
  }
}
