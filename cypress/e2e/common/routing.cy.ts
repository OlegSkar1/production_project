import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Роутинг', () => {
  describe('пользователь НЕ авторизован', () => {
    it('Должна открыться главная страница', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Должно редиректнуть на главную при попытке посетить маршрут только для авторизованных пользователей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Должно редиректнуть на ErrorPage при попытке посетить несуществующий маршрут', () => {
      cy.visit('/gdfgdfh');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Переход открывает страницу статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/4');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
  });
});
