/// <reference types="cypress"/>
describe(
  "Login Input",
  {
    viewportHeight: 810,
    viewportWidth: 1440,
  },
  () => {
    it.only("Correct Value", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .trigger("mouseover")
        .click()
        .wait(2000)
        .type("administrator");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .trigger("mouseover")
        .click()
        .wait(2000)
        .type("Admin@123");
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .trigger("mouseover")
        .click();
    });
  }
);
