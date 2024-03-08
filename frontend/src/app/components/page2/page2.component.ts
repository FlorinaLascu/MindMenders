import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  selectedGender: string = '';

  selectGender(gender: string): void {
    this.selectedGender = gender;
    
  }

}
