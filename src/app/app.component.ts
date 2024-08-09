import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-data-sharing';
  inputData?: string;
  showComponent: boolean = true;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  changeInput() {
    this.inputData = this.inputData === 'Initial Data' ? 'Updated Data' : 'Initial Data';
  }
}
