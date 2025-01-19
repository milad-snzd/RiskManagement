///<reference types = "cypress"/>
import { slowCypressDown } from 'cypress-slow-down'
describe(
  "Full Home Page",
  {
    viewportHeight: 810,
    viewportWidth: 1440,
    watchForFileChangs: false,
  },
  () => {
    it("All Category HomePage", () => {
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
      cy.get('[data-test="chips-item-4"]').click();
    });
    it("Fixed Income HomePage", () => {
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
      cy.get('[data-test="chips-item-1"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("/");
      });
    });
    it("Joint Stock HomePage", () => {
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
      cy.get('[data-test="chips-item-2"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("/");
      });
    });
    it("Click On Avesta All Fund Category List", () => {
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
      cy.get('[data-test="chips-item-4"]').click();
      cy.get('[data-test="30f32a7f-f571-4bff-bbb7-443eed60eacb"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/30f32a7f-f571-4bff-bbb7-443eed60eacb");
      });
    });
    it("Click On Tosetaavon All Fund Category List", () => {
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
      cy.get('[data-test="chips-item-4"]').click();
      cy.get('[data-test="bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5");
      });
    });
    it("Click On Petrosaba All Fund Category List", () => {
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
      cy.get('[data-test="chips-item-4"]').click();
      cy.get('[data-test="7f279c23-7fb4-4fb6-ac79-d998ab209075"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/7f279c23-7fb4-4fb6-ac79-d998ab209075");
      });
    });
    it("Click On Diba All Fund Category List", () => {
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
      cy.get('[data-test="chips-item-4"]').click();
      cy.get('[data-test="86ff9674-8c7f-4a02-ad71-f209c0fa838e"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/86ff9674-8c7f-4a02-ad71-f209c0fa838e");
      });
    });
    it("Click On Avesta Fixed Income Fund Category List", () => {
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
      cy.get('[data-test="chips-item-1"]').click();
      cy.get('[data-test="30f32a7f-f571-4bff-bbb7-443eed60eacb"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/30f32a7f-f571-4bff-bbb7-443eed60eacb");
      });
    });
    it("Click On Toseetaavon Fixed Income Fund Category List", () => {
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
      cy.get('[data-test="chips-item-1"]').click();
      cy.get('[data-test="bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5");
      });
    });
    it("Click On Diba Fixed Income Fund Category List", () => {
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
      cy.get('[data-test="chips-item-1"]').click();
      cy.get('[data-test="86ff9674-8c7f-4a02-ad71-f209c0fa838e"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/86ff9674-8c7f-4a02-ad71-f209c0fa838e");
      });
    });
    it("Click On Petrosaba Joint Stock Fund Category List", () => {
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
      cy.get('[data-test="chips-item-2"]').click();
      cy.get('[data-test="7f279c23-7fb4-4fb6-ac79-d998ab209075"]').click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/7f279c23-7fb4-4fb6-ac79-d998ab209075");
      });
    });
    it("Click On Avesta Fund in Home Page", () => {
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
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/30f32a7f-f571-4bff-bbb7-443eed60eacb");
      });
    });
    it("Click On Toseetaavon Fund in Home Page", () => {
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
        '[data-test="fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5"]'
      ).click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5");
      });
    });
    it("Click On Petrosaba Fund in Home Page", () => {
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
        '[data-test="fund-card-7f279c23-7fb4-4fb6-ac79-d998ab209075"]'
      ).click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/7f279c23-7fb4-4fb6-ac79-d998ab209075");
      })
    });
    it("Click On Diba Fund in Home Page", () => {
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
        '[data-test="fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e"]'
      ).click();
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain("details/86ff9674-8c7f-4a02-ad71-f209c0fa838e");
      });
    });
    it("Hover On Avesta Fund in Home Page", () => {
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
      ).realHover();
    });
    it("Hover On Toseetaavon Fund in Home Page", () => {
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
        '[data-test="fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5"]'
      ).realHover();
    });
    it("Hover On Petrosaba Fund in Home Page", () => {
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
        '[data-test="fund-card-7f279c23-7fb4-4fb6-ac79-d998ab209075"]'
      ).realHover();
    });
    it("Hover On Diba Fund in Home Page", { scrollBehavior: false }, () => {
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
        '[data-test="fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e"]'
      ).realHover();
    });
    it(
      "Hover On Line Chart Avesta Fund in Home Page",
      { scrollBehavior: false },
      () => {
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
          '[data-tooltip-id="30f32a7f-f571-4bff-bbb7-443eed60eacb"]'
        ).realHover();
      }
    );
    it(
      "Hover On Line Chart Toseetaavon Fund in Home Page",
      { scrollBehavior: false },
      () => {
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
          '[data-test="fund-card-bdec8981-34d4-47a0-a9bc-c6bcde4f9fc5-stack-chart"]'
        ).realHover();
      }
    );
    it(
      "Hover On Line Chart Petrosaba Fund in Home Page",
      { scrollBehavior: false },
      () => {
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
          '[data-tooltip-id="7f279c23-7fb4-4fb6-ac79-d998ab209075"]'
        ).realHover();
      }
    );
    it(
      "Hover On Line Chart Diba Fund in Home Page",
      { scrollBehavior: false },
      () => {
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
          '[data-test="fund-card-86ff9674-8c7f-4a02-ad71-f209c0fa838e-stack-chart"]'
        ).realHover();
      }
    );
  }
);
slowCypressDown(1000)
