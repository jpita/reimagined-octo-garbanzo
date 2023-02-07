/// <reference types="Cypress" />

export default class loginPage {
  getLoginButton() {
    return cy.get(".pg-sidebar-wrapper-profile-link-img");
  }

  getSignInButton() {
    return cy.get(".pg-sidebar-wrapper-nav-item-text>span");
  }

  getUserName() {
    return cy.get("#username");
  }

  getPassword() {
    return cy.get("#password");
  }

  getContinueButton() {
    return cy.get("button").contains("Continue");
  }

  getEstimatedTotalLabel() {
    return cy.get(".trakx-estimated__total-label");
  }
}
