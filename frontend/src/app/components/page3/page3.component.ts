import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { SharedDataService } from '../../services/shared-data.service';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {

  constructor(private apiService: ApiserviceService, private sharedDataServices: SharedDataService) { }
  tulburare: string = '';
  terapie: string = '';

  ngOnInit() {
    this.tulburare = this.sharedDataServices.getTulburare();
    this.terapie = this.sharedDataServices.getTerapie();
  }

  buttonPressed(): void {
    console.log(this.tulburare, this.terapie);
    this.apiService.calculateTime(this.tulburare, this.terapie)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
}
