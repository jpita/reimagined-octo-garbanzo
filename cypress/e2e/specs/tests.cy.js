/// <reference types="Cypress" />

import HamburgerMenuPage from "../page-objects/hamburger-menu-page.js";
import MainPageFiltersPage from "../page-objects/main-page-filters-page.js";
import SearchPage from "../page-objects/search-page.js";
const hamburgerMenuPage = new HamburgerMenuPage();
const mainPageFiltersPage = new MainPageFiltersPage();
const searchPage = new SearchPage();

describe("Test Amazon.in", () => {
  before(() => {
    cy.visit("/");
  });

  it("Check hamburger menu open ", () => {
    hamburgerMenuPage.getHamburgerMenuButton().click({ force: true });
    hamburgerMenuPage.getHamburgerMenuContent().should("be.visible");
  });

  it("Go to televisions ", () => {
    cy.contains("TV, Appliances, Electronics").click();
    cy.contains("Televisions").click();
    cy.contains("Brands").should("be.visible");
  });

  it("Select Samsung brand ", () => {
    mainPageFiltersPage.getSamsungBrandsOption().click();
    mainPageFiltersPage
      .getSelectedFilters()
      .contains("Samsung")
      .should("be.visible");
  });

  it("Sort the Samsung results with price High to Low", () => {
    searchPage.getSearchPageDropdown().click();
    searchPage.getHighToLowOption().click();
    searchPage
      .getSearchPageDropdown()
      .should("contain.text", "Price: High to Low");
  });

  it("Select the second Samsung TV", () => {
    searchPage
      .getSecondProductOnThePage()
      .eq(0)
      .then((a) => {
        cy.visit(a.attr("href"));
      });
    cy.contains("About this item").should("be.visible");
  });
});
