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
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]').type('administrator')
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]').type('Admin@123')
      
    });
  }
);
