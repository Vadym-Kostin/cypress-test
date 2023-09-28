import { DatepickerPage } from "../pages/DatepickerPage";
import { NavMenuComponent } from "../pages/components/NavMenuComponent";
import moment from "moment";

describe("Datepicker page suite", () => {
    it("Datepicker validation", () => {
        cy.visit("/");
        const tab = "Forms";
        const subTab = "Datepicker"
        const menuComponent = new NavMenuComponent();
        menuComponent.openTabsByValues(tab, subTab);
        const datepicker = new DatepickerPage();
        datepicker.getCommonDatepicker().click();
        const todayDate = moment().format("MMM D, Y");
        datepicker.getTodayDateInCalendar().click();
        datepicker.getCommonDatepicker().should("have.value", todayDate);
    });
});