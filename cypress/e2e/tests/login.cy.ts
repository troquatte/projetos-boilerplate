/// <reference types="cypress" />

import { LoginPage } from '../pages/loginPage.cy';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.getTitle().should('eq', 'Boilerplate');
  });
});
