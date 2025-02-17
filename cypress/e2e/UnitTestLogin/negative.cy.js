/// <reference types="cypress"/>
describe(
  "Login Negative Test",
  {
    viewportHeight: 810,
    viewportWidth: 1440,
  },
  () => {
    it("Entering an incorrect password & valid username", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
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
        .type("Ms0480371261!");
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
    });
    it("Entering an incorrect username for a valid password", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .wait(1000)
        .type("Fs000");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Ms0480371261!@");
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
    });
    it("Entering an empty username field", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Ms0480371261!@");
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
    });
    it("Entering an empty password field", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .type("Fs0");
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
    });
    it("Entering a username that does not exist in the system", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .type("AAAAAAAAAAAAAAA");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]').type(
        "Ms0480371261@"
      );
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
    });
    it("Testing login with excessive length usernames and passwords", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .type(
          "sdkjfhlkjhafkjhsldkjhflkjahkdsjhflkjhakjhdslkjhfakjhsdkfhlakjhsdfkhkjdhflahjfdkjshflkjhasdkflhakdjshlkhjsakjfhkdjhfakjhdfkjlhakdjshkjhdfkjhdkfjkdjhkdjhfkjhdkfjkdjfkf"
        );
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]').type(
        "Ms0480371261@ajhsgdfkjhgkdjshfkjhgdskjhfkjhsdgkfjhgfkjhgsdkjfgkjsdhgfkjhgsdkjfkjshgfkjhgsdkfgkjsdgfkjbjbcgfksdgfxjhbxkjbxkjfskjfgkjsdfhgksdjbfxkjxbxfkjbkfjhsgdkjfgxbsjhk"
      );
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
    });
    it("Testing login with incorrect case (uppercase/lowercase) in the username", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir/login");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .type("AAAAsdmnsd,smnd,m65435435435");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]').type(
        "Ms0480371261@"
      );
      cy.get(
        '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
      ).click();
      cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
        .contains("ورود")
        .click();
      cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
        ($response) => {
          expect($response.status).to.eq(200);
        }
      );
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-error"]').should(
        "contain",
        "نام کاربری یا رمز عبور صحیح نیست"
      );
    });
  }
);
