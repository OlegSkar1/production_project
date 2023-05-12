import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import {User} from '@/entities/User/model/types/user'
import { selectByTestId } from 'cypress/helpers/selectByTestId';

export const login = (username: string = 'testuser', password: string = '123') => {
  return cy.request({
    url: 'http://localhost:8000/login',
    method: 'POST',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));

    return body
  });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId))
}

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
