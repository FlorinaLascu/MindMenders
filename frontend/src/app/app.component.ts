import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  pagenumber = 1;

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  ngAfterViewInit() {
    this.container.createComponent(Page1Component);
  }

  addDynamicComponent() {
    if (this.pagenumber === 1) {
      this.removeDynamicComponent();
      const componentRef = this.container.createComponent(Page2Component);
      this.pagenumber = 2;
    }
    else if (this.pagenumber === 2) {
      this.removeDynamicComponent();
      const componentRef = this.container.createComponent(Page3Component);
      this.pagenumber = 3;
    }else if (this.pagenumber === 3) {
      this.removeDynamicComponent();
      const componentRef = this.container.createComponent(Page4Component);
      this.pagenumber = 4;
    }
    
    // You can interact with the component's instance
    // componentRef.instance.someProperty = 'someValue';
  }

  removeDynamicComponent() {
    this.container.clear(); // This removes all components from the container
  }

}
