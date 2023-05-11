import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const login = (username: string = 'testuser', password: string = '123') => {
  cy.request({
    url: 'http://localhost:8000/login',
    method: 'POST',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
  });
};
