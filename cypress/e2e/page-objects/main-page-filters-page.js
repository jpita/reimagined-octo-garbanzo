/// <reference types="Cypress" />

export default class MainPageFiltersPage {
  getSamsungBrandsOption() {
    return cy.get("span.a-size-base").contains("Samsung");
  }

  getSelectedFilters() {
    return cy.get("span.a-size-base.a-text-bold");
  }
}
