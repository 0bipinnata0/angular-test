import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  onNameChange(value: string) {
    this.name = value;
  }

  date = '';
  onDateChange(value: string) {
    this.date = value;
  }

  amount = 0;
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  height = 0;
  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  miles = 0;
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
