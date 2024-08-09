import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentData?: string;
  @Output() messageEvent = new EventEmitter<string>();
  childMessage: string = '';

  sendMessage() {
    this.messageEvent.emit(this.childMessage);
  }

  showAlert() {
    alert(`Child says: ${this.childMessage}`);
  }

  @Input() counter: number = 0; // Counter value passed from the parent
  @Output() counterChange = new EventEmitter<number>(); // Emit counter changes to the parent

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter); // Notify parent about the change
  }

  decrement() {
    this.counter--;
    this.counterChange.emit(this.counter); // Notify parent about the change
  }
}
