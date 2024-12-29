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
    });
  }
);
