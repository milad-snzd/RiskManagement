/// <reference types="cypress"/>
describe(
  "Login Positive Test",
  {
    viewportHeight: 810,
    viewportWidth: 1440,
  },
  () => {
    it("Log in with the correct username and password", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .wait(1000)
        .type("administrator");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Admin@123");
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
    });
    it("Login with the minimum length of username and password allowed", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .wait(1000)
        .type("Fs0");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Ms04803@");
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
    });
  }
);

