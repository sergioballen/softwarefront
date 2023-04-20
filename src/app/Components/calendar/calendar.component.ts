import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  view: string = 'month';
  viewDate: Date = new Date();
  
  setView(view: string) {
    this.view = view;
  }
  
  prevMonth() {
    this.viewDate.setMonth(this.viewDate.getMonth() - 1);
  }
  
  nextMonth() {
    this.viewDate.setMonth(this.viewDate.getMonth() + 1);
  }
}
