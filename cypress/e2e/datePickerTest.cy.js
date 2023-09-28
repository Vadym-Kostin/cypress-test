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
        const todayDate = moment().format("MMM Do Y");
        const parts = todayDate.split(' ');
        const todayDateWithoutSuffix = parts[1].replace(/\D/g, "");
        const month = parts[0];
        const year = parts[2];
        const newDateString = `${month} ${todayDateWithoutSuffix}, ${year}`;
        datepicker.getTodayDateInCalendar().click();
        datepicker.getCommonDatepicker().should("have.value", newDateString);
    });
});