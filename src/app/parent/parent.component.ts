import { Component, ViewChild, AfterViewInit} from '@angular/core';//
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData: string = '';
  messageFromChild: string = ''; // Initialize with an empty string;
  @ViewChild(ChildComponent) childComponent?: ChildComponent;

  ngAfterViewInit() {
    // Access the child component's method and data using @ViewChild
    if (this.childComponent) {
      console.log(this.childComponent.childMessage);
    }
  }

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }

  callChildMethod() {
    if (this.childComponent) {
      this.childComponent.showAlert();
    }
  }


  counter: number = 0; // Counter value

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  updateCounter(newCounter: number) {
    this.counter = newCounter; // Update counter when child emits changes
  }
}
