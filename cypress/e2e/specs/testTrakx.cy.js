/// <reference types="Cypress" />

import LoginPage from "../page-objects/login-page";
// import MainPageFiltersPage from "../page-objects/main-page-filters-page.js";
// import SearchPage from "../page-objects/search-page.js";
const loginPage = new LoginPage();
// const mainPageFiltersPage = new MainPageFiltersPage();
// const searchPage = new SearchPage();

describe("Test Trakx", () => {
  before(() => {
    cy.visit("/");
  });

  it("login", () => {
    loginPage.getLoginButton().click();
    loginPage.getSignInButton().contains("Sign In").click();
    const args = { loginPage };
    cy.origin(
      "https://stage-trakx.eu.auth0.com",
      { args: loginPage },
      ({ loginPage }) => {
        loginPage.getUserName().type("joao+1912@trakx.io");
        loginPage.getPassword().get("#password").type("Trakx@1912");
        loginPage
          .getContinueButton()
          .get("button")
          .contains("Continue")
          .click();
      }
    );

    loginPage
      .getEstimatedTotalLabel()
      .get(".trakx-estimated__total-label")
      .should("be.visible");
  });
});
