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
      // cy.get('[data-test="2720bbfd-1f06-4fb0-b45c-7b2477154123"]')
      // .invoke('removeAttr','target').click();
    });
    it("Sanaye Box", { scrollBehavior: false }, () => {
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
  }
);
