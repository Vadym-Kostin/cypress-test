describe("First suite", () => {
  it("First test", () => {
    // Open the web app
    cy.visit("/");

    // Open tabs in sequence
    const tabs = ["Layout", "Accordion", "Form", "Form Layouts"];
    tabs.forEach((tab) => {
      cy.contains(tab).click();
    });
  });
});