export class LoginPage {

    elements = {
        emailAdressInput: () => cy.get("#input-email"),
        passwordInput: () => cy.get("#input-password"),
        checkboxRememberMe: () => cy.get(".custom-checkbox"),
        loginButton: () => cy.get("button[status='primary']"),
        errorInputMessage: (value) => cy.get(".form-control-group").contains(value),
        forgotPassword: () => cy.contains("a", "Forgot Password?")
    }

    enterEmailAdressValue(value) {
        this.elements.emailAdressInput().type(value);
    }

    enterPasswordValue(value) {
        this.elements.passwordInput().type(value, {sensitive: true});
    }

    clickOnCheckboxRememberMe() {
        this.elements.checkboxRememberMe().click();
    }

    clickOnLoginButton() {
        this.elements.loginButton().click();
    }

    checkIsErrorMessageVisibleByText(value) {
        this.elements.errorInputMessage(value).should("be.visible");
    }

    clickOnForgotPassword() {
        this.elements.forgotPassword().click();
    }
}