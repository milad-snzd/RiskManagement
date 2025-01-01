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
    });
    it("Login with a username and password containing alphanumeric characters", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .wait(1000)
        .type("Ms007@@@");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Ms007@@@");
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
    });
    it("Login with a username that contains both uppercase and lowercase characters.", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .wait(1000)
        .type("Ms007@@@");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Ms007@@@");
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
    });
    it("Login using a valid email address as the username", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .wait(1000)
        .type("milad.snzd@gmail.com");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Ms0480371261@");
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
    });
    it("Login using a valid phonenumber as the username", () => {
      cy.visit("https://riskmanagement-stage.otcsaba.ir");
      cy.get(".text-textWhite > .flex > .text-lg").contains(
        "سامانه مدیریت ریسک"
      );
      cy.get(".pb-7").contains("ورود کاربر");
      cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
        .click()
        .wait(1000)
        .type("09393236862");
      cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
        .click()
        .wait(1000)
        .type("Ms0480371261@!");
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
    });
    // it("Login after a password reset to ensure the new password works", () => {
    //   cy.visit("https://riskmanagement-stage.otcsaba.ir");
    //   cy.get(".text-textWhite > .flex > .text-lg").contains(
    //     "سامانه مدیریت ریسک"
    //   );
    //   cy.get(".pb-7").contains("ورود کاربر");
    //   cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
    //     .click()
    //     .wait(1000)
    //     .type("Fadsf");
    //   cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
    //     .click()
    //     .wait(1000)
    //     .type("Ms0480371261@d");
    //   cy.get(
    //     '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
    //   ).click();
    //   cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
    //     .contains("ورود")
    //     .click();
    //   cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
    //     ($response) => {
    //       expect($response.status).to.eq(200);
    //     }
    //   );
    //   cy.get('[data-test="ceaff9b2-e6f7-4cc4-a5a6-d9a0e3d99a9f"]')
    //     .contains("فراموشی رمز عبور")
    //     .click();
    //   cy.get('[data-test="81510a63-ae96-4a70-9e2f-d02b89bd4ab2"]').type(
    //     "milad"
    //   );
    //   cy.get('[data-test="14cd6af5-905e-4562-91f2-9bea461ae06d"]').type(
    //     "saeednezhad"
    //   );
    //   cy.get('[data-test="ef505948-ef5e-4ed8-992f-732900a1b76c"]').type(
    //     "09393236862"
    //   );
    //   cy.get('[data-test="0b6655f3-6408-45b0-80df-393d3396dfad"]').type(
    //     "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است."
    //   );
    //   cy.get('[data-test="4261a30a-e7d2-451f-9130-d2026f7299e1"]').click();
    // });
    // it("Login after an account recovery process", () => {
    //   cy.visit("https://riskmanagement-stage.otcsaba.ir");
    //   cy.get(".text-textWhite > .flex > .text-lg").contains(
    //     "سامانه مدیریت ریسک"
    //   );
    //   cy.get(".pb-7").contains("ورود کاربر");
    //   cy.get('[data-test="64dee3ca-87c2-4c17-95ae-01afc8d4e01e"]')
    //     .click()
    //     .wait(1000)
    //     .type("Fadsf");
    //   cy.get('[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea"]')
    //     .click()
    //     .wait(1000)
    //     .type("Ms0480371261@d");
    //   cy.get(
    //     '[data-test="98e1eb98-87b2-4112-a3c9-6a23b29c3fea-show-pass-icon"]'
    //   ).click();
    //   cy.get('[data-test="559b63a0-af19-4aa1-9643-e333fafefe3d"]')
    //     .contains("ورود")
    //     .click();
    //   cy.request("https://riskmanagement-stage.otcsaba.ir/login").then(
    //     ($response) => {
    //       expect($response.status).to.eq(200);
    //     }
    //   );
    //   cy.get('[data-test="ceaff9b2-e6f7-4cc4-a5a6-d9a0e3d99a9f"]')
    //     .contains("فراموشی رمز عبور")
    //     .click();
    //   cy.get('[data-test="81510a63-ae96-4a70-9e2f-d02b89bd4ab2"]').type(
    //     "milad"
    //   );
    //   cy.get('[data-test="14cd6af5-905e-4562-91f2-9bea461ae06d"]').type(
    //     "saeednezhad"
    //   );
    //   cy.get('[data-test="ef505948-ef5e-4ed8-992f-732900a1b76c"]').type(
    //     "09393236862"
    //   );
    //   cy.get('[data-test="0b6655f3-6408-45b0-80df-393d3396dfad"]').type(
    //     "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است."
    //   );
    //   cy.get('[data-test="4261a30a-e7d2-451f-9130-d2026f7299e1"]').click();
    // });
  }
);
