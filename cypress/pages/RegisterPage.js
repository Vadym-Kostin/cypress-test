export class RegisterPage {

    elements = {
        nameInput: () => cy.get("#input-name"),
        emailAdressInput: () => cy.get("#input-email"),
        passwordInput: () => cy.get("#input-password"),
        repeatPasswordInput: () => cy.get("#input-re-password"),
        checkboxAgreeToTermsAndConditions: () => cy.get(".custom-checkbox"),
        registerButton: () => cy.get("button[status='primary']"),
        errorInputMessage: (value) => cy.get(".form-control-group").contains(value)
    }

    enterNameValue(value) {
        this.elements.nameInput().type(value);
    }

    enterEmailAdressValue(value) {
        this.elements.emailAdressInput().type(value);
    }

    enterPasswordValue(value) {
        this.elements.passwordInput().type(value, {sensitive: true});
    }

    enterConfirmPasswordValue(value) {
        this.elements.repeatPasswordInput().type(value);
    }

    clickOnConfirmPasswordInput() {
        this.elements.repeatPasswordInput().click();
    }

    clickOnRegisterButton() {
        this.elements.registerButton().click();
    }

    clickOnCheckboxAgreeToTermsAndConditions() {
        this.elements.checkboxAgreeToTermsAndConditions().click();
    }

    checkIsErrorMessageVisibleByText(value) {
        this.elements.errorInputMessage(value).should("be.visible");
    }
}