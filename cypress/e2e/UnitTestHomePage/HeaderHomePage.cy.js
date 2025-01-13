/// <reference types="cypress"/>

describe(
  "Home Page Test",
  {
    viewportHeight: 810,
    viewportWidth: 1440,
  },
  () => {
    it("Header Logo Test", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/");
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("login");
      });
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]').type(
        "administrator"
      );
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]').type(
        "Admin@123"
      );
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]').click();
      cy.get('[data-test="cc4b92ba-4cad-478e-99de-90aed7b8710e"]')
        .contains("خدمات مدیریت صبا تامین")
        .click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("/");
      });
      cy.get('[data-test="header-menu-item-1"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("/");
      });
      cy.get('[data-test="74bb0dc3-bec4-4bb5-967b-ea01a60f8523"]').click();
      cy.get('[data-test="5ae8890d-577c-4a66-9727-d3b2c51cac64"]').scrollTo(
        "bottom"
      );
      cy.get('[data-test="3c5cbf10-c7c1-41dc-8bb8-ca33ff0201f2"]').click()
      cy.get('[data-test="317a7760-27b6-4a05-b037-0080c4a59dfa"]').click()
    });
  }
);
