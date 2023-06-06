export const addRate = (rateCount = 5, feedback = 'cool') => {
  cy.getByTestId(`StarRating.Star-${rateCount}`).click();
  cy.getByTestId('RatingCard.Input').type(feedback);
  cy.getByTestId('RatingCard.Accept').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addRate(rateCount?: number, feedback?: string): Chainable<void>;
    }
  }
}
