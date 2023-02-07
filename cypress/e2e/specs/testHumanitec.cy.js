/// <reference types="Cypress" />
describe("Test Amazon.in", () => {
  before(() => {
    cy.visit(
      "https://dineshvelhal.github.io/testautomation-playground/forms.html"
    );
  });

  it("submit a web form ", () => {
    cy.get("#validationCustom03").type("Lisbon");
    cy.get("#validationCustom04").type("Lisbon Area");
    cy.get("#validationCustom05").type("1000");
    cy.get("#invalidCheck").click();
    cy.get("button.btn.btn-primary").click();
    cy.intercept("POST", "https://reqres.in/api/users").as("postUser");
  });
});
