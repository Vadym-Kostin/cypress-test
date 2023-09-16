describe("UI suite", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("First test", () => {
        const colors = {
            "Light": "rgb(255, 255, 255)",         
            "Dark": "rgb(34, 43, 69)",        
            "Cosmic": "rgb(50, 50, 89)",        
            "Corporate": "rgb(255, 255, 255)"         
        };
        
        cy.wrap(Object.keys(colors)).each((theme) => {
            cy.get("button.select-button").click();
            cy.contains("nb-option", theme.trimStart()).click();
            cy.get("nb-layout-header nav").should("have.css", "background-color", colors[theme]);
        });
    });

    it("Second test", () => {
        cy.contains("Layout").click();
        cy.contains("Accordion").click();
        cy.contains(".item-body", "interstellar").eq(0).should("be.hidden");
        cy.contains("button", "Toggle First Item").click();
        cy.contains(".item-body", "interstellar").eq(0).should("be.visible");
    });

    it("Third test", () => {
        cy.contains("Modal & Overlays").click();
        cy.contains("Popover").click();
        cy.contains("button", "Right").trigger("mouseenter");
        cy.contains("nb-popover", "Hello, how are you today?").should("be.visible");
    });

    it("Fourth test", () => {
        cy.contains("Modal & Overlays").click();
        cy.contains("Dialog").click();
        cy.contains("button", "Enter Name").click();
        cy.get("input[placeholder='Name']").type("John");
        cy.contains("button[status='success']", "Submit").click();
        cy.contains("ul > li", "John").should("be.visible");
    });
  });