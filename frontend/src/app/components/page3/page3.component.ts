import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {

  constructor(private apiService: ApiserviceService) { }

  selectedDisorderType: string = '';
  selectedTherapyType: string = '';

  buttonPressed(): void {
    this.apiService.calculateTime(this.selectedDisorderType, this.selectedTherapyType)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
}
