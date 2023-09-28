export class DatepickerPage {

    elements = {
        commonDatepickerInput: () => cy.contains("nb-card", "Common Datepicker").find("input"),
        calendar: () => cy.get("nb-calendar-picker-row nb-calendar-day-cell.today")
    }

    getCommonDatepicker() {
       return this.elements.commonDatepickerInput();
    }
    
    getTodayDateInCalendar() {
        return this.elements.calendar();
    }
}