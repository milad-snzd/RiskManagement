///<reference types = "cypress"/>

describe(
  "Header Detail Page",
  {
    viewportHeight: 810,
    viewportWidth: 1440,
  },
  () => {
    it("Fund Introduction Card", () => {
      const childeids = [
        "[data-test=fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb]",
        "[data-test=fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5]",
        "[data-test=fund-card-7f279c23-7fb4-4fb6-ac79-d998ab209075]",
        "[data-test=fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e]",
      ];
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
      cy.get('[data-test="4aa183fb-6913-49ae-ba84-18dfb4a3d1ea"]');
      const randomIndex = Math.floor(Math.random() * 3);
      const fundId = childeids[randomIndex];
      cy.get(fundId).click();
      cy.get('[data-test="2720bbfd-1f06-4fb0-b45c-7b2477154123"]')
        .invoke("removeAttr", "target")
        .click();
    });
    it("Fund Introduction Card List Of Symbols", () => {
      Cypress.on("uncaught:exception", (err) => {
        if (
          err.message.includes(
            "ResizeObserver loop completed with undelivered notifications"
          )
        ) {
          return false;
        }
      });
      const childeids = [
        "[data-test=fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb]",
        "[data-test=fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5]",
        "[data-test=fund-card-7f279c23-7fb4-4fb6-ac79-d998ab209075]",
        "[data-test=fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e]",
      ];
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
      cy.get('[data-test="4aa183fb-6913-49ae-ba84-18dfb4a3d1ea"]');
      const randomIndexs = Math.floor(Math.random() * 3);
      const fundId = childeids[randomIndexs];
      cy.get(fundId).click();
      cy.get('[data-test="2720bbfd-1f06-4fb0-b45c-7b2477154123"]')
        .invoke("removeAttr", "target")
        .click();
      cy.get('[data-test="03e518ff-102f-4be7-9fd0-bb6b4521c2c6"]').click();
    });
    it("Fund Introduction Card List Of Symbols In Stock", () => {
      Cypress.on("uncaught:exception", (err) => {
        if (
          err.message.includes(
            "ResizeObserver loop completed with undelivered notifications"
          )
        ) {
          return false;
        }
      });
      const childeids = [
        "[data-test=fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb]",
        "[data-test=fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5]",
        "[data-test=fund-card-7f279c23-7fb4-4fb6-ac79-d998ab209075]",
        "[data-test=fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e]",
      ];
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
      cy.get('[data-test="4aa183fb-6913-49ae-ba84-18dfb4a3d1ea"]');
      const randomIndexs = Math.floor(Math.random() * 3);
      const fundId = childeids[randomIndexs];
      cy.get(fundId).click();
      cy.get('[data-test="2720bbfd-1f06-4fb0-b45c-7b2477154123"]')
        .invoke("removeAttr", "target")
        .click();
      cy.get("[row-index]")
        .then(($el) => {
          const randomIndex = Math.floor(Math.random() * $el.length);
          return cy.wrap($el[randomIndex]);
        })
        .find("> :first-child > :first-child")
        .invoke("html");

      function getRandomNestedChildText() {
        return cy.get("[row-index]").then(($el) => {
          if ($el.length === 0) {
            return null;
          }
          const randomIndex = Math.floor(Math.random() * $el.length);
          const nestedChild = $el[randomIndex].children[0]?.children[0];
          return nestedChild ? nestedChild.innerHTML : null;
        });
      }
      getRandomNestedChildText().then((innerHTML) => {
        cy.get('[data-test="531cbdaa-8c85-4833-9354-f242a1279966"]').type(
          innerHTML
        );
      });
    });
    it("Fund Introduction Card List Of Symbols In Scrap ", () => {
      Cypress.on("uncaught:exception", (err) => {
        if (
          err.message.includes(
            "ResizeObserver loop completed with undelivered notifications"
          )
        ) {
          return false;
        }
      });
      const childeids = [
        "[data-test=fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb]",
        "[data-test=fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5]",
        "[data-test=fund-card-7f279c23-7fb4-4fb6-ac79-d998ab209075]",
        "[data-test=fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e]",
      ];
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
      cy.get('[data-test="4aa183fb-6913-49ae-ba84-18dfb4a3d1ea"]');
      const randomIndexs = Math.floor(Math.random() * 3);
      const fundId = childeids[randomIndexs];
      cy.get(fundId).click();
      cy.get('[data-test="2720bbfd-1f06-4fb0-b45c-7b2477154123"]')
        .invoke("removeAttr", "target")
        .click();
      cy.get('[data-test="radio--item-300"]').click();
      cy.get("[row-index]")
        .then(($el) => {
          const randomIndex = Math.floor(Math.random() * $el.length);
          return cy.wrap($el[randomIndex]);
        })
        .find("> :first-child > :first-child")
        .invoke("html");

      function getRandomNestedChildText() {
        return cy.get("[row-index]").then(($el) => {
          if ($el.length === 0) {
            return null;
          }
          const randomIndex = Math.floor(Math.random() * $el.length);
          const nestedChild = $el[randomIndex].children[0]?.children[0];
          return nestedChild ? nestedChild.innerHTML : null;
        });
      }
      getRandomNestedChildText().then((innerHTML) => {
        cy.get('[data-test="531cbdaa-8c85-4833-9354-f242a1279966"]').type(
          innerHTML
        );
      });
    });
    it("Sanaye Box", { scrollBehavior: false }, () => {
      const childeids = [
        "[data-test=fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb]",
        "[data-test=fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5]",
        "[data-test=fund-card-7f279c23-7fb4-4fb6-ac79-d998ab209075]",
        "[data-test=fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e]",
      ];
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
      cy.get(
        '[data-test="fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb"]'
      ).click();
      const randomIndex = Math.floor(Math.random() * 3);
      const fundId = childeids[randomIndex];
      cy.get(fundId).click();
      cy.get(
        '[data-test="30f32a7f-f571-4bff-bbb7-443eed60eacb-industries-pie-card"] > .justify-between'
      )
        .contains("صنایع")
        .realHover();
    });
    it("Daraei Box", { scrollBehavior: false }, () => {
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
      cy.get(
        '[data-test="fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb"]'
      ).click();
      cy.get(
        '[data-test="30f32a7f-f571-4bff-bbb7-443eed60eacb-asset-pie-card"] > .justify-between'
      )
        .realHover()
        .contains("دارایی");
    });
    it("P/E Box", { scrollBehavior: false }, () => {
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
      cy.get(
        '[data-test="fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb"]'
      ).click();
      cy.get(
        '[data-test="30f32a7f-f571-4bff-bbb7-443eed60eacb-pe-card"] > .justify-between'
      ).click();
      cy.get("[aria-label=modal-close]").click();
    });
    it("Market Risk Tab", { scrollBehavior: false }, () => {
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
      cy.get(
        '[data-test="fund-card-30f32a7f-f571-4bff-bbb7-443eed60eacb"]'
      ).click();
      cy.get('[data-test="tab-item-1"] > .pt-2').click();
    });
  }
);
