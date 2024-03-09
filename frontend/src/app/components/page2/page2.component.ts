import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  selectedGender: string = '';
  constructor(private apiService: ApiserviceService) { }

  selectGender(gender: string): void {
    this.selectedGender = gender;
    
  }

  pressButton(): void {
    this.apiService.getTerapeut()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

}
