import { RegisterPage } from "../pages/RegisterPage";
import { NavMenuComponent } from "../pages/components/NavMenuComponent";

describe("Register page suite", () => {
    beforeEach(() => {
        cy.visit("/");
        const tab = "Auth";
        const subTab = "Register"
        const menuComponent = new NavMenuComponent();
        menuComponent.openTabsByValues(tab, subTab);
    })

    const register = new RegisterPage();

    it("Register inputs validation", () => {
        register.enterNameValue("s");
        register.enterEmailAdressValue("asd");
        register.enterPasswordValue("1");
        register.clickOnConfirmPasswordInput();
        register.clickOnCheckboxAgreeToTermsAndConditions();
        register.checkIsErrorMessageVisibleByText("Full name should contains from 4 to 50 characters");
        register.checkIsErrorMessageVisibleByText("Email should be the real one!");
        register.checkIsErrorMessageVisibleByText("Password should contain from 4 to 50 characters");
        register.checkIsErrorMessageVisibleByText("Password confirmation is required!");
    });

    it("Register success validation", () => {
        register.enterNameValue("John");
        register.enterEmailAdressValue("example@gmail.com");
        register.enterPasswordValue("Qwerty123");
        register.enterConfirmPasswordValue("Qwerty123");
        register.clickOnCheckboxAgreeToTermsAndConditions();
        register.clickOnRegisterButton();
        cy.get("div.user-picture").should("be.visible");
    });      
  });