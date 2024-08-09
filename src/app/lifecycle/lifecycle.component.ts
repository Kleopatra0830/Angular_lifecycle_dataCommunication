import { Component , OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() data?: string;

  constructor() {
    // called when the component is instantiated.
    // used to initialize class members and dependencies.
    console.log('Constructor: LifecycleComponent is created');
    debugger;
  }

  // This is called whenever one or more @Input properties change. It receives a SimpleChanges object containing the current and previous values of the changed properties.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input properties changed', changes);
    debugger;
  }

  // This is called once after the first ngOnChanges. It’s typically used for initialization logic, like fetching data from services.
  ngOnInit() {
    console.log('ngOnInit: Component initialization');
    debugger;
  }

  // This is called during every change detection run, allowing you to implement custom change detection logic.
  ngDoCheck() {
    console.log('ngDoCheck: Custom change detection');
    debugger;
  }

  // This is called once after Angular projects external content into the component’s view. It's used for any initialization that depends on content projection.
  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content projected into the component');
    debugger;
  }

  // This is called after every check of the projected content. It's used to react to changes in the projected content.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Content checked');
    debugger;
  }

  // This is called once after the component’s view and its children’s views have been initialized. It's used to perform any actions that need access to the component’s view or its children.
  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized');
    debugger;
  }

  // This is called after every change detection cycle for the component’s view and its children’s views.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: View checked');
    debugger;
  }

  // This is called just before Angular destroys the component. It’s used for cleanup, such as unsubscribing from observables or detaching event handlers.
  ngOnDestroy() {
    console.log('ngOnDestroy: Component destroyed');
    debugger;
  }

  changeData() {
    this.data = 'Data changed!';
    debugger;
  }
}
