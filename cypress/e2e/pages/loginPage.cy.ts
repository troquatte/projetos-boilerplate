/// <reference types="cypress" />

import { ERouters } from '../../../src/app/enum/ERouters.enum';

export class LoginPage {
  // Locators
  #locators = {};

  // Methods
  visit() {
    cy.visit(`/${ERouters.AUTH}`);
  }

  getTitle() {
    return cy.title();
  }
}
