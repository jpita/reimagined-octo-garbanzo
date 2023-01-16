/// <reference types="Cypress" />

export default class HamburgerMenuPage {
  getHamburgerMenuButton() {
    return cy.get("#nav-hamburger-menu");
  }

  getHamburgerMenuContent() {
    return cy.get("#hmenu-content");
  }
}
