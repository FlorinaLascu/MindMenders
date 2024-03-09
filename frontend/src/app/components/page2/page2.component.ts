import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
 
})


export class Page2Component {
  moveLeft = false;
  showSecondComponent = false;
  selectedGender: string = '';
  
  constructor(private apiService: ApiserviceService) { }

  selectGender(gender: string): void {
    this.selectedGender = gender;
    
  }

  pressButton(): void {
    this.moveLeft = !this.moveLeft;
    setTimeout(() => {
      this.showSecondComponent = true;
    }, 400); // Corresponds to the CSS transition time
  



    this.apiService.getTerapeut()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }
  

}
