import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  constructor(private apiService: ApiserviceService) { }


  showDisorder() {
    const textarea = document.getElementById("user_input_information") as HTMLTextAreaElement;
    const description = textarea.value;
    this.apiService.getDisorder(description)
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }
}
