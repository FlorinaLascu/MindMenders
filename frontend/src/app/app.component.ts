import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Page2Component } from './components/page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor() {
    this.container = {} as ViewContainerRef;
  }

//   addDynamicComponent() {
//     const componentRef = this.container.createComponent(Page2Component);
//     // You can interact with the component's instance
//     // componentRef.instance.someProperty = 'someValue';
//   }

//   removeDynamicComponent() {
//     this.container.clear(); // This removes all components from the container
//   }
// 
}
