/// <reference types="Cypress" />

export default class SearchPage {
  getSearchPageDropdown() {
    return cy.get("#a-autoid-0-announce");
  }

  getHighToLowOption() {
    return cy.get("#s-result-sort-select_2").contains("Price: High to Low");
  }

  getSecondProductOnThePage() {
    return cy.get("div[data-index='2'] a");
  }
}
