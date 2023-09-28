export class NavMenuComponent {

    elements = {
        tab: (value) => cy.get(`a[title='${value}']`)
    }

    openTabsByValues(value1, value2) {
        this.elements.tab(value1).click();
        this.elements.tab(value2).click();
    }
}