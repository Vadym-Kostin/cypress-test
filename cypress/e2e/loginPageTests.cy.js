import { LoginPage } from "../pages/LoginPage";
import { NavMenuComponent } from "../pages/components/NavMenuComponent";

describe("Login page suite", () => {
    beforeEach(() => {
        cy.visit("/");
        const tab = "Auth";
        const subTab = "Login"
        const menuComponent = new NavMenuComponent();
        menuComponent.openTabsByValues(tab, subTab);
    })

    const login = new LoginPage();

    it("Login inputs validation", () => {
        login.enterEmailAdressValue("asd");
        login.enterPasswordValue("123");
        login.clickOnCheckboxRememberMe();
        login.checkIsErrorMessageVisibleByText("Email should be the real one!");
        login.checkIsErrorMessageVisibleByText("Password should contain from 4 to 50 characters");
    });

    it("Login success validation", () => {
        login.enterEmailAdressValue("example@gmail.com");
        login.enterPasswordValue("Qwerty123");
        login.clickOnCheckboxRememberMe();
        login.clickOnLoginButton();
        cy.get("div.user-picture").should("be.visible");
    });

    it("Forgot password email validation", () => {
        login.clickOnForgotPassword();
        login.enterEmailAdressValue("asd");
        cy.contains("#title", "Forgot Password").click();
        login.checkIsErrorMessageVisibleByText("Email should be the real one!");
        cy.contains("a", "Back to Log In").click();
        cy.url().should("eq", "http://localhost:4200/auth/login");
        login.clickOnForgotPassword();
        cy.contains("a", "Register").click();
        cy.url().should("eq", "http://localhost:4200/auth/register");
    });        
  });