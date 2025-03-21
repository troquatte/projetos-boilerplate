/// <reference types="cypress" />

export class LoginPage {
  // Locators
  #locators = {};

  // Methods
  visit() {
    cy.visit(`/`);
  }

  getTitle() {
    return cy.title();
  }
}
