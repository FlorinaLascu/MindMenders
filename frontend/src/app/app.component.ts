import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  pagenumber = 1;

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor() {
    this.container = {} as ViewContainerRef;
  }
  ngOnInit() {
    this.addDynamicComponent();
  }

  addDynamicComponent() {
    if (this.pagenumber === 1) {
      const componentRef = this.container.createComponent(Page1Component);
      this.pagenumber = 2;
    }
    else if (this.pagenumber === 2) {
      this.removeDynamicComponent();
      const componentRef = this.container.createComponent(Page2Component);
      this.pagenumber = 3;
    }
    
    // You can interact with the component's instance
    // componentRef.instance.someProperty = 'someValue';
  }

  removeDynamicComponent() {
    this.container.clear(); // This removes all components from the container
  }

}
